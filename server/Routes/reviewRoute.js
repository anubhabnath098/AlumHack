const express = require('express');
const { createReview, getReviews } = require('../Controller/reviewController');
const { protect } = require('../Middleware/authMiddleware');

const router = express.Router();

// Post a review for a specific food item (requires authentication)
router.post('/:foodid', protect, createReview);

// Get all reviews for a specific food item
router.get('/:foodid', getReviews);

module.exports = router;
