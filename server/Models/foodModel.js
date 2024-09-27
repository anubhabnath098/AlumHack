const mongoose = require('mongoose');

// Define the Nutrition Schema
const nutritionSchema = new mongoose.Schema({
  fat: { type: String},
  protein: { type: String},
  carbs: { type: String}
});

// Define the Food Schema
const foodSchema = new mongoose.Schema({
  name: { type: String, required: true},
  availability: { type: Boolean, required: true, default:true },
  type: { type: String, required: true },
  image: { type: String, required: true },
  desc: { type: String, required: true },
  nutrition:{
    fat: { type: String},
    protein: { type: String},
    carbs: { type: String}
  },
  price: { type: Number, required: true },
  reviews: { type: Number, required: true },
  upvote: { type: Number, required: true, min:0 },
  downvote: { type: Number, required: true, min:0 },
  stars: { type: Number, required: true },
  userVotes: [{ userId: String, voteType: String }],
  createdAt: { type: Date, default: Date.now },
});

// Export the model, using 'Menu' as the collection name
const Menu = mongoose.model('Menu', foodSchema);
module.exports = Menu;
