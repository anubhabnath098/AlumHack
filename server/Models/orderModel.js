// orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  foodId: { type: String, required: true },
  username: { type: String, required: true },
  quantity: { type: Number, required: true, default: 1 },
  status: {
    type: String,
    enum: ['in queue', 'preparing', 'Ready'],
    default: 'in queue',
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
