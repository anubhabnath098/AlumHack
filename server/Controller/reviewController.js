const Food = require('../Models/Food');

// Create a review with title, review, and stars
const createReview = async (req, res) => {
    const { title, review, stars } = req.body;  // Added title in the body
    const { foodid } = req.params; 

    // Validate if title, review, and stars are provided
    if (!title || !review || !stars) {
        return res.status(400).json({ message: 'Please provide a title, review, and star rating' });
    }

    try {
        const food = await Food.findById(foodid);
        
        // Check if the food item exists
        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        // Create a new review object
        const newReview = {
            user: req.user._id,  // Reference to the authenticated user
            title,               // Added title to the review object
            review,
            stars
        };

        // Push the new review into the food's reviews array
        food.reviews.push(newReview);

        // Save the updated food document
        await food.save();

        // Return the newly added review
        res.status(201).json({ message: 'Review added', review: newReview });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all reviews for a specific food item
const getReviews = async (req, res) => {
    const { foodid } = req.params;

    try {
        // Find the food item by foodId and populate user info for reviews
        const food = await Food.findById(foodid).populate('reviews.user', 'name');

        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        // Return all reviews for the specific food item
        res.status(200).json(food.reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { createReview, getReviews };
