const mongoose = require('mongoose');

// Define the Nutrition Schema
const nutritionSchema = new mongoose.Schema({
  fat: { type: String, required: true },
  protein: { type: String, required: true },
  carbs: { type: String, required: true }
});

// Define the Food Schema
const foodSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  availability: { type: Boolean, required: true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String, required: true },
  nutrition: nutritionSchema,
  quantity: { type: String, required: true },
  price: { type: Number, required: true },
  reviews: { type: Number, required: true },
  upvote: { type: Number, required: true },
  downvote: { type: Number, required: true },
  stars: { type: Number, required: true }
});

// Export the model, using 'Menu' as the collection name
const Menu = mongoose.model('Menu', foodSchema);
module.exports = Menu;
