import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import client from "prom-client";

import { registerValidation, loginValidation, reviewValidation } from './validations/validations.js';

import checkAuth from "./utils/checkAuth.js";
import { handleValidationErrors } from './utils/handleValidationErrors.js'

import * as UserController from "./controllers/userController.js";
import * as ReviewController from "./controllers/reviewController.js";

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://username:password@cluster.mongodb.net/dbname'
).then(() => {
    console.log('DB OK')
}).catch((err) => {console.log('db err', err)});

const app = express();
const port = Number(process.env.PORT) || 4444;

const register = new client.Registry();
client.collectDefaultMetrics({ register });

const httpRequestsTotal = new client.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests",
    labelNames: ["method", "route", "status_code"],
    registers: [register],
});

const httpRequestDurationSeconds = new client.Histogram({
    name: "http_request_duration_seconds",
    help: "HTTP request latency in seconds",
    labelNames: ["method", "route", "status_code"],
    buckets: [0.05, 0.1, 0.3, 0.5, 1, 2, 5],
    registers: [register],
});

app.use(express.json());

const allowedOrigins = (process.env.FRONTEND_ORIGIN || "http://localhost:5173,http://localhost,http://127.0.0.1")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-custom-header'],
  }));

app.use((req, res, next) => {
    const end = httpRequestDurationSeconds.startTimer();

    res.on("finish", () => {
        const route = `${req.baseUrl}${req.route?.path || req.path}`;
        const statusCode = String(res.statusCode);
        const labels = {
            method: req.method,
            route,
            status_code: statusCode,
        };

        httpRequestsTotal.inc(labels);
        end(labels);
    });

    next();
});

app.get("/health", (_req, res) => {
    res.status(200).json({ status: "ok" });
});

app.get("/metrics", async (_req, res) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
});

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login);
app.post('/auth/register',registerValidation, handleValidationErrors, UserController.register);
app.get('/auth/me', checkAuth, UserController.getMe);
app.get('/user/:id', UserController.getOne)
app.get('/user/search/:nickname', UserController.search)

app.get('/reviews', ReviewController.getAll);
app.post('/reviews/album', ReviewController.getByAlbum);
app.post('/reviews/user', ReviewController.getByUser);
app.get('/reviews/:id', ReviewController.getOne);
app.post('/reviews', reviewValidation, handleValidationErrors, checkAuth, ReviewController.create);
app.delete('/reviews/:id', checkAuth, ReviewController.remove);
// app.patch('/reviews/:id', ReviewController.update);

app.listen(port, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log(`Server OK on port ${port}`)
});
