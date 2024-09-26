const mongoose = require('mongoose');

// Define the Review Schema
const reviewSchema = new mongoose.Schema({
    foodId:{
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true,
    },
    stars: {
        type: Number,
        required: true,
        min: 1, // minimum stars is 1
        max: 5, // maximum stars is 5
    },
    date:{
        type:Date,
        default:Date.now
    }
}, { timestamps: true });

// Export the model
const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
