const Menu = require('../Models/foodModel');

// Function to add a menu item
exports.addMenuItem = async (req, res) => {
  try {
    const newMenuItem = new Menu(req.body);
    const savedMenuItem = await newMenuItem.save();
    res.status(201).json(savedMenuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Function to get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
