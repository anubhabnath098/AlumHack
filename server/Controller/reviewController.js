const Menu = require('../Models/foodModel');
const Review = require('../Models/Review');
const User = require('../Models/User');

// Create a review with title, review, and stars
const createReview = async (req, res) => {
    const { foodId,username,title, description, stars } = req.body.newReview;  // Added title in the body 
    console.log(req.body.newReview);

    // Validate if title, review, and stars are provided
    if (!foodId|| !username|| !title || !stars || !description) {
        return res.status(400).json({ message: 'Please provide a title, review, and star rating' , status:false});
    }

    try {
        const food = await Menu.findById(foodId);
        const user = await User.find({username:username});
        if(food&&user){
            const newReview = new Review({
                foodId,
                username,  // Reference to the authenticated user
                title,               // Added title to the review object
                description,
                stars
            });
            console.group(newReview)
            await newReview.save();
            console.log(newReview);
            res.status(201).json({ message: 'Review added', review: newReview , status:true});
        }
        else{
            res.json({message:"food item does not exist", status:false});
        }
        
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all reviews for a specific food item
const getReviews = async (req, res) => {
    const { foodid } = req.params;

    try {
        // Find the food item by foodId and populate user info for reviews
        const food = await Menu.findById(foodid);
        const reviews = await Review.find({foodId:foodid});

        if (!food) {
            return res.status(404).json({ message: 'Food item not found' , status:false});
        }

        res.status(200).json({review:reviews, status:true});
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message, status:false });
    }
};

module.exports = { createReview, getReviews };
