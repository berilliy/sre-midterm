import ReviewModel from '../models/review.js'

export const getAll = async (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const startIndex = (page - 1) * limit;
        const total = await ReviewModel.countDocuments();

        const reviews = await ReviewModel.find().sort({$natural:-1}).skip(startIndex).limit(limit).populate('user').exec();



        res.json({
            reviews, 
            pages: Math.ceil(total / limit)
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Unable to get reviews. Try later.'
        })
    }
};

export const getOne = async (req, res) => {
    try {
        const reviewId = req.params.id;

        const doc = await ReviewModel.findOne({
            _id: reviewId,
        }).populate('user').exec();

        if (!doc) {
            return res.status(404).json({
                message: 'Review not found'
            })
        }

        res.json(doc)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Unable to get reviews. Try later.'
        })
    }
};

export const getByAlbum = async (req, res) => {
    try {

        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const startIndex = (page - 1) * limit;
        const total = await ReviewModel.countDocuments({
            albumName: req.body.albumName,
            albumArtist: req.body.albumArtist
        });

        const reviews = await ReviewModel.find({
            albumName: req.body.albumName,
            albumArtist: req.body.albumArtist
        }).sort({$natural:-1}).skip(startIndex).limit(limit).populate('user').exec();

        if (!reviews) {
            return res.status(404).json({
                message: 'Reviews not found'
            })
        }

        res.json({
            reviews, 
            pages: {
                page: Math.ceil(total / limit),
                total
            }
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Unable to get reviews. Try later.'
        })
    }
};

export const getByUser = async (req, res) => {
    try {
        
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const startIndex = (page - 1) * limit;
        const total = await ReviewModel.countDocuments({
            user: req.body.userId,
        });

        const reviews = await ReviewModel.find({
            user: req.body.userId,
        }).sort({$natural:-1}).skip(startIndex).limit(limit).populate('user').exec();

        if (!reviews) {
            return res.status(404).json({
                message: 'Review not found'
            })
        }

        res.json({
            reviews, 
            pages: Math.ceil(total / limit)
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Unable to get reviews. Try later.'
        })
    }
};


export const remove = async (req, res) => {
    try {
        const reviewId = req.params.id;

        const doc = await ReviewModel.findOne({
            _id: reviewId,
        });

        if (!doc) {
            return res.status(404).json({
                message: 'Review not found'
            })
        }
        
        await ReviewModel.findOneAndDelete({
            _id: reviewId,
        });

        res.json({
            success: true,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Unable to delete review. Try later.'
        })
    }
};

export const create = async (req, res) => {
    try {
        const doc = new ReviewModel({
                title: req.body.title,
                text: req.body.text,
                rating: req.body.rating,
                albumName: req.body.albumName,
                albumArtist: req.body.albumArtist,
                user: req.userId,
            });

        const review = await doc.save();

        res.json(review);

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Unable to post review. Try later.'
        })
    }
};