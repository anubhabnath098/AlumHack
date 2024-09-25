const Food = require('../Models/Food');

const createReview = async (req, res) => {
    const { review, stars } = req.body;
    const { foodid } = req.params; 

    if (!review || !stars) {
        return res.status(400).json({ message: 'Please provide a review and star rating' });
    }

    try {
        const food = await Food.findById(foodid);
        
        if (!food) {
            return res.status(404).json({ message: 'Food item not found' });
        }

        const newReview = {
            user: req.user._id, 
            review,
            stars
        };

        food.reviews.push(newReview);

        await food.save();

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

        res.status(200).json(food.reviews);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

module.exports = { createReview, getReviews };
