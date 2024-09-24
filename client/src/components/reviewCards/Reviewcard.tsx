"use client"
import React, { useState, useEffect } from "react";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const reviews = [
  {
    name: "John Doe",
    date: "2024-09-20",
    stars: 5,
    review: "Amazing product! Would definitely recommend it to everyone.",
  },
  {
    name: "Jane Smith",
    date: "2024-09-19",
    stars: 4,
    review: "Great value for the price. Satisfied with the purchase.",
  },
  {
    name: "Alex Johnson",
    date: "2024-09-18",
    stars: 3,
    review: "It's decent, but could be improved in a few areas.",
  },
  {
    name: "Emily White",
    date: "2024-09-17",
    stars: 5,
    review: "Exceeded my expectations! Will buy again for sure.",
  },
  {
    
      name: "Hugh Jackman",
      date: "2024-09-19",
      stars: 6,
      review: "Good food. Wolverine happy",
    
  }
];

const ReviewCard = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimate(true); // Trigger the animation

      setTimeout(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
        setAnimate(false); // Remove animation once review is updated
      }, 1000);
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const { name, date, stars, review } = reviews[currentReview];

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`p-6 w-[270px] bg-white border border-gray-200 rounded-lg shadow-md transition-transform duration-600 ease-in-out ${
          animate ? "animate-slideLeft" : "animate-resetPosition"
        }`}
      >
        <h2 className="text-2xl font-bold mb-2 text-amber-950">{name}</h2>
        <p className="text-gray-500 mb-4">{date}</p>
        <div className="text-yellow-400 text-xl mb-4">
          {Array(Math.min(5,Math.floor(stars))).fill(null).map((_, index) => (
            <StarIcon key={index} />
        ))}
        {Array(5-Math.min(5,Math.floor(stars))).fill(null).map((_, index) => (
            <StarBorderIcon key={index} />
        ))}
        </div>
        <p className="text-gray-700 text-[12px]">{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
