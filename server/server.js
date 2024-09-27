const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./Routes/userRoute'); // Import user routes
const reviewRoutes = require('./Routes/reviewRoute'); // Import review routes
const menuRoutes = require("./Routes/menuRoute"); // Import menu routes
const cors = require("cors")

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allowed methods
  credentials: true
}))

// MongoDB Connection
mongoose
  .connect(
    "mongodb://localhost:27017/Alum"
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
// app.use("/api/order", orderRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
