const express = require('express');
const router = express.Router();
const {getOrders, placeOrder, getAllOrders} = require("../Controller/orderController")

router.get('/:username', getOrders);
router.post('/:foodId',placeOrder);
router.get('/', getAllOrders);


module.exports = router;
