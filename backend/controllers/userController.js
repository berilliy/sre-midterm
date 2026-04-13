import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

import UserModel from '../models/user.js'


export const register = async (req, res) => {
    try {

        const password = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        const doc = new UserModel({
            email: req.body.email,
            nickname: req.body.nickname,
            avatarUrl: req.body.avatarUrl,
            passwordHash: hash,
        });

        const user = await doc.save();

        const token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_SECRET || 'your_jwt_secret_here', {
            expiresIn: '30d',
        })

        const { passwordHash, ...userData } = user._doc;

        res.json({
            ...userData,
            token,
        });
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Unable to register. Try later.'
        })
    }
};

export const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email })

        if (!user) {
            return res.status(400).json({
                message: 'Wrong email or password'
            });
        }

        const isValidPass = await bcrypt.compare(req.body.password, user._doc.passwordHash);
        if (!isValidPass) {
            return res.status(400).json({
                message: 'Wrong email or password'
            });
        }

        const token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_SECRET || 'your_jwt_secret_here', {
            expiresIn: '30d',
        })

        const { passwordHash, ...userData } = user._doc;

        res.json({
            ...userData,
            token,
        });

    } catch (err) {

    }
};

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId);

        if (!user) {
            return res.status(404).json({
                message: "Unable to find user"
            })
        }

        const { passwordHash, ...userData } = user._doc;

        res.json({
            ...userData,
        });

    } catch (err) {

    }
};

export const getOne = async (req, res) => {
    try {
        const userId = req.params.id;

        const doc = await UserModel.findOne({
            _id: userId,
        });

        if (!doc) {
            return res.status(404).json({
                message: 'User not found'
            })
        }

        res.json(doc)
        
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Unable to get user. Try later.'
        })
    }
};

export const search = async (req, res) => {
    try {

        const doc = await UserModel.find({
            nickname: {$regex: req.params.nickname, $options: 'i'}
        }).limit(10);

        if (!doc) {
            return res.status(404).json({
                message: 'Users not found'
            })
        }

        res.json(doc)
        
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Unable to get users. Try later.'
        })
    }
};