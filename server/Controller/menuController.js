const Menu = require('../Models/foodModel')

// Middleware for file uploads
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Specify your uploads directory

// Add a menu item
exports.addMenuItem = async (req, res) => {
  try {
    console.log(req.body.dishData);
    const { name, availability, type, image, desc, nutrition, price, reviews, upvote, downvote, stars } = req.body.dishData;

    const newMenuItem = new Menu({
      name,
      availability: availability === 'true',
      type,
      image: req.body.dishData.image?req.body.dishData.image: 'background.png', // Save the uploaded file name
      desc,
      nutrition,
      price,
      reviews,
      upvote,
      downvote,
      stars
    });

    await newMenuItem.save();
    res.status(201).json({ message: 'Menu item added successfully', data: newMenuItem , status:true});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while adding the menu item.' , status:false});
  }
};


// Function to get all menu items
exports.getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.status(200).json({data:menuItems, status:true});
  } catch (error) {
    res.status(500).json({ error: error.message, status:false });
  }
};

exports.getOneMenuItem = async (req, res) =>{
  try{
    const id = req.params.id;
    const menuItem = await Menu.findById(id);
    if(menuItem){
      res.status(200).json({data:menuItem, status:true});
    }
    else{
      res.json({message:"No item", status:false});
    }
  }
  catch(err){
    res.status(500).json({error:err.message, status:false})
  }
}

exports.editOneMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body; // Ensure you are getting the correct body

    const updatedMenuItem = await Menu.findByIdAndUpdate(id, updatedData, { new: true });

    if (!updatedMenuItem) {
      return res.status(404).json({ message: 'Menu item not found', status: false });
    }

    res.status(200).json({ message: 'Menu item updated successfully', data: updatedMenuItem, status: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message:"Internal Server Error", status: false });
  }
};




exports.deleteOneMenuItem = async (req, res) =>{
  try{
    const id = req.params.id;
    const menuItem = await Menu.findByIdAndDelete(id);
    console.log(menuItem);
    if(menuItem){
      res.status(200).json({data:menuItem, status:true});
    }
    else{
      res.json({message:"Error Deleting Item", status:false});
    }
  }
  catch(err){
    res.status(500).json({error:error.message, status:false})
  }
}
