const User = require('../Models/User');
const bcrypt = require('bcrypt');

// Register a new user
exports.registerUser = async (req, res) => {
    const { email, password, isAdmin } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const user = new User({
            email,
            password,
            isAdmin
        });

        // Save user to the database
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
};

// Login user
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Return success response
        res.status(200).json({ message: 'Login successful', isAdmin: user.isAdmin });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};
