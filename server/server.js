<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./Routes/userRoute'); // Import user routes
const reviewRoutes = require('./Routes/reviewRoute'); // Import review routes
=======
// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/userRoute"); // Import user routes
const menuRoutes = require("./Routes/menuRoute"); // Import menu routes
>>>>>>> e959ac0b946289d6e0be54e41508bab975e89ff6

dotenv.config();

const app = express();

app.use(express.json());

// MongoDB Connection
mongoose
  .connect(
    "mongodb+srv://4:4@cluster2.5lfuw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Simple route
app.get("/", (req, res) => {
  res.send("Welcome to the backend API!");
});

app.use('/api/reviews', reviewRoutes); 
app.use("/api/users", userRoutes); // All user-related routes will have a /api/users prefix

app.use("/api/menu", menuRoutes); 

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
