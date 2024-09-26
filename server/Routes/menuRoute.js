const express = require("express");
const multer = require("multer"); // Import multer for file uploads
const { addMenuItem, getAllMenuItems, getOneMenuItem, editOneMenuItem, deleteOneMenuItem } = require("../Controller/menuController");
const router = express.Router();

// Route to add a menu item with file upload handling
router.post("/add", addMenuItem);

// Route to get all menu items
router.get("/", getAllMenuItems);
router.get("/:id",getOneMenuItem);
router.put("/:id",editOneMenuItem);
router.delete("/:id", deleteOneMenuItem);

module.exports = router;

