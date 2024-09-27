const express = require("express");
const multer = require("multer"); // Import multer for file uploads
const { addMenuItem, getAllMenuItems, getOneMenuItem, editOneMenuItem, deleteOneMenuItem, updateVotes, getLeaderboard } = require("../Controller/menuController");
const router = express.Router();

// Route to add a menu item with file upload handling
router.post("/add", addMenuItem);

// Route to get all menu items
router.get("/leaderboard", getLeaderboard);
router.get("/", getAllMenuItems);
router.patch('/votes/:id', updateVotes);
router.get("/:id", getOneMenuItem);
router.put("/:id", editOneMenuItem);
router.delete("/:id", deleteOneMenuItem);

module.exports = router;

