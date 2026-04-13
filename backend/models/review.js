import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
    },
    text: {
        type: String,
        required: true, 
    },
    rating: {
        type: Number,
        required: true, 
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    albumName: {
        type: String,
        required: true, 
    },
    albumArtist: {
        type: String,
        required: true, 
    },
}, {
    timestamps: true,
});

export default mongoose.model('Review', ReviewSchema)