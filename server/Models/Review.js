const mongoose = require('mongoose');

// Define the Review Schema
const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference the User model
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
        min: 1, // minimum stars is 1
        max: 5, // maximum stars is 5
    },
}, { timestamps: true });

// Export the model
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
