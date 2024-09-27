"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import axios from 'axios';

function LeaderboardCard({ dish }:any) {
  //console.log(dish);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  // Function to update votes in the database
  const updateVotes = async (userId, { upvoteChange, downvoteChange }) => {
    try {
      await axios.patch(`http://localhost:5000/api/menu/votes/${dish._id}`, {
        userId,
        upvoteChange,
        downvoteChange,
      });
    } catch (error) {
      console.error('Error updating votes:', error);
      // Revert state if there's an error
      if (upvoteChange < 0) {
        setUpvoted(false); // Reset upvote state
      }
      if (downvoteChange < 0) {
        setDownvoted(false); // Reset downvote state
      }
      alert('Failed to update votes. Please try again.');
    }
  };

  const handleUpvote = () => {
    const username = localStorage.getItem('username');
    const userId = username;

    if (upvoted) {
      // User is trying to upvote again, decrement the upvote count
      dish.upvote -= 1; // Directly mutate for simplicity, can be improved
      setUpvoted(false); // Remove upvote
      updateVotes(userId, { upvoteChange: -1, downvoteChange: 0 });
    } else {
      // If user has downvoted, switch to upvote
      if (downvoted) {
        dish.downvote -= 1;
        dish.upvote += 1;
        setDownvoted(false); // Remove downvote
      } else {
        // User is voting for the first time
        dish.upvote += 1;
      }
      setUpvoted(true);
      updateVotes(userId, { upvoteChange: 1, downvoteChange: downvoted ? -1 : 0 });
    }
  };

  const handleDownvote = () => {
    const username = localStorage.getItem('username');
    const userId = username;

    if (downvoted) {
      // User is trying to downvote again, decrement the downvote count
      dish.downvote -= 1;
      setDownvoted(false); // Remove downvote
      updateVotes(userId, { upvoteChange: 0, downvoteChange: -1 });
    } else {
      // If user has upvoted, switch to downvote
      if (upvoted) {
        dish.upvote -= 1;
        dish.downvote += 1;
        setUpvoted(false); // Remove upvote
      } else {
        // User is voting for the first time
        dish.downvote += 1;
      }
      setDownvoted(true);
      updateVotes(userId, { upvoteChange: upvoted ? -1 : 0, downvoteChange: 1 });
    }
  };

  return (
    <div className="w-[80%] border h-[200px] flex text-yellow-100 gap-2">
      <div className="w-[20%]">
        <Image className="h-full w-full object-cover border-2 p-2" src={"/" + dish?.image} alt="" height={1000} width={1000} />
      </div>
      <div className="w-full flex flex-col justify-center pl-10 gap-4 bg-yellow-100 text-green-950">
        <h1 className="text-bold">
          {dish?.name?.toUpperCase()}
          <div className="">
            {Array(Math.min(5, Math.floor(dish?.stars))).fill(null).map((_, index) => (
              <StarIcon key={index} />
            ))}
            {Array(5 - Math.min(5, Math.floor(dish?.stars))).fill(null).map((_, index) => (
              <StarBorderIcon key={index} />
            ))}
          </div>
        </h1>
        <p className="">{dish?.desc.slice(0,100)+"..."}</p>
        <div className="flex text-green-950 gap-10">
          <div className='flex gap-1 cursor-pointer' onClick={handleUpvote}>
            <ThumbUpOutlinedIcon /> {dish?.upvote}
          </div>
          <div className='flex gap-1 cursor-pointer' onClick={handleDownvote}>
            <ThumbDownOutlinedIcon /> {dish?.downvote}
          </div>
          <div className='flex gap-1'>
          <Link href={"/review/" + dish?._id}><ModeCommentOutlinedIcon /></Link>
                {dish?.reviews}
          </div>
          <button className="text-bold border-2 p-1 px-5 transition-all border-green-950 hover:bg-green-950 hover:border-green-950 hover:text-yellow-100">
            <Link href={"/menu"}>Order</Link>
          </button>
          <button className="text-bold border-2 p-1 px-5 transition-all border-red-950 hover:bg-red-950 hover:border-red-950 hover:text-yellow-100">
            <Link href={"/menu/"+dish.type+"/"+dish._id}>View</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeaderboardCard;
