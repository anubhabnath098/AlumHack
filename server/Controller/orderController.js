exports.getOrders = async (req, res) => {
    const { username } = req.params;
    const orders = await Order.find({ username });
    res.json(orders);
  };

exports.placeOrder = async (req, res) => {
    const { foodId } = req.params;
    const { username, quantity } = req.body;
  
    const newOrder = new Order({ foodId, username, quantity });
    await newOrder.save();
    res.json(newOrder);
  };

exports.getAllOrders = async (req, res) => {
    const orders = await Order.find({ status: { $in: ['in queue', 'preparing'] } });
    res.json(orders);
  };