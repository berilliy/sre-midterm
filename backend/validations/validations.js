import { body } from "express-validator";

export const registerValidation = [
    body('email', 'Wrong email format').isEmail(),
    body('password', 'Password must have 6 characters').isLength({ min: 6, max: 100 }),
    body('nickname', 'Nickname must have 4 characters').isLength({ min: 4, max: 30 }),
    body('avatarUrl', 'Wrong avatar URL').optional().isURL(),
];

export const loginValidation = [
    body('email', 'Wrong email format').isEmail(),
    body('password', 'Password must have 6 characters').isLength({ min: 6 }),
];

export const reviewValidation = [
    body('title', 'Review must have a title between 4 and 30 characters').isLength({ min: 4, max: 40}),
    body('text', 'Review must have a text with 10 to 1500 characters').isLength({ min: 10, max: 1500  }),
    body('rating', 'Review must have a rating').isNumeric(),
    body('albumName', 'Something went wrong').isString(),
    body('albumArtist', 'Something went wrong').isString(),
];
