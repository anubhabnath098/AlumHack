const User = require('../Models/User');
const bcrypt = require('bcrypt');

// Register a new user
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);

    try {
        // Check if the user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists', status:false });
        }

        // Create a new user
        const user = await User.create({
            username,
            email,
            password
        });

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            isAdmin: user.isAdmin,
            status:true
        });
    } catch (error) {
        res.status(400).json({ message: error.message, status:false });
    }
};

// Login user
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ username });

        // Check if the user exists and the password matches
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
                status:true
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password', status:false });
        }
    } catch (error) {
        res.status(400).json({ message: error.message, status:false });
    }
};

module.exports = { registerUser, loginUser };
