const express = require("express");
const {
  addMenuItem,
  getAllMenuItems,
} = require("../Controller/menuController");
const router = express.Router();

// Route to add a menu item
router.post("/add", addMenuItem);

// Route to get all menu items
router.get("/", getAllMenuItems);

module.exports = router;
