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
      availability: availability,
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

// Assuming you have a date field in your Menu model

const getTopDishes = async (period) => {
  let startDate;

  const currentDate = new Date();
  switch (period) {
      case 'weekly':
          startDate = new Date(currentDate.setDate(currentDate.getDate() - 7));
          break;
      case 'monthly':
          startDate = new Date(currentDate.setMonth(currentDate.getMonth() - 1));
          break;
      case 'yearly':
          startDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1));
          break;
      default:
          throw new Error('Invalid period');
  }

  //console.log(`Fetching top dishes for period: ${period}, starting from: ${startDate}`);

  try {
      const topDishes = await Menu.aggregate([
          {
              $match: {
                  createdAt: { $gte: startDate } // Ensure the field exists in your schema
              }
          },
          {
              $project: {
                  name: 1,
                  upvote: 1,
                  downvote: 1,
                  image: 1,
                  reviews: 1,
                  stars: 1,
                  desc:1,
                  type:1,
              }
          },
          {
              $sort: { upvote: -1 }
          },
          {
              $limit: 5
          }
      ]);

      //console.log(`Top dishes fetched: ${JSON.stringify(topDishes)}`);
      return topDishes;
  } catch (error) {
      console.error('Error in aggregation:', error); // Log the error
      throw new Error('Error fetching top dishes: ' + error.message);
  }
};


exports.getLeaderboard = async (req, res) => {
  //console.log('getLeaderboard called'); 
  const period = 'monthly';  // Hardcoded for testing

  //console.log(`Received period: ${period}`);  // This should always log 'monthly'

  try {
      const topDishes = await getTopDishes(period);
      res.status(200).json({ data: topDishes, status: true });
  } catch (error) {
      console.error('Error fetching leaderboard:', error); 
      res.status(500).json({ error: error.message, status: false });
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
    //console.log(menuItem);
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

exports.updateVotes = async (req, res) => {
  const { id } = req.params;
  const { userId, upvoteChange, downvoteChange } = req.body;

  try {
      const menuItem = await Menu.findById(id);
      
      if (!menuItem) {
          return res.status(404).json({ message: 'Menu item not found', status: false });
      }

      const existingVote = menuItem.userVotes.find(vote => vote.userId === userId);

      if (existingVote) {
          if (existingVote.voteType === 'upvote') {
              if (upvoteChange > 0) {
                  // User is trying to upvote again, decrement the count
                  menuItem.upvote -= 1;
                  menuItem.userVotes = menuItem.userVotes.filter(vote => vote.userId !== userId);
              } else if (downvoteChange > 0) {
                  // Switch from upvote to downvote
                  menuItem.upvote -= 1;
                  menuItem.downvote += 1;
                  existingVote.voteType = 'downvote'; // Update vote type
              }
          } else if (existingVote.voteType === 'downvote') {
              if (downvoteChange > 0) {
                  // User is trying to downvote again, decrement the count
                  menuItem.downvote -= 1;
                  menuItem.userVotes = menuItem.userVotes.filter(vote => vote.userId !== userId);
              } else if (upvoteChange > 0) {
                  // Switch from downvote to upvote
                  menuItem.downvote -= 1;
                  menuItem.upvote += 1;
                  existingVote.voteType = 'upvote'; // Update vote type
              }
          }
      } else {
          // New vote
          if (upvoteChange > 0) {
              menuItem.upvote += 1;
              menuItem.userVotes.push({ userId, voteType: 'upvote' });
          } else if (downvoteChange > 0) {
              menuItem.downvote += 1;
              menuItem.userVotes.push({ userId, voteType: 'downvote' });
          }
      }

      await menuItem.save();
      res.status(200).json({ message: 'Votes updated successfully', data: menuItem, status: true });
  } catch (error) {
      console.error('Error updating votes:', error);
      res.status(500).json({ message: 'Internal Server Error', status: false });
  }
};



