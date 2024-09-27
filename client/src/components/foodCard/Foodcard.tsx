"use client"
import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import Image from 'next/image';
import Link from 'next/link';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Foodcard({ food, admin }: any) {
  const router = useRouter();

  // Handle Edit button click
  const handleEdit = () => {
    router.push(`/menu/edit/${food._id}`);
  };

  // Handle Delete button click
  const handleDelete = async () => {
    const confirmDelete = confirm(`Are you sure you want to delete ${food.name}?`);
    if (confirmDelete) {
      try {
        console.log("Deleting item:", food._id);  // Confirm the correct ID
        const response = await axios.delete(`http://localhost:5000/api/menu/${food._id}`);
        console.log("Delete response:", response.data);  // Log response from server
        alert("Item deleted successfully");
        window.location.href = window.location.href;  // Reload the page after deletion
      } catch (error) {
        console.error("Error deleting item:", error);  // Log the exact error
        alert("Error deleting the item");
      }
    }
  };
  

  return (
    <div className='h-[350px] w-[250px] bg-white flex flex-col justify-center items-center relative'>
      {/* View details link */}
      <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center absolute transition-all top-[-7px] right-[-7px] z-20 bg-red-950 text-white hover:border hover:bg-white hover:text-red-950">
        <Link href={food.type === "drink" ? "/menu/drink/" + food._id : "/menu/snack/" + food._id}>
          <FreeBreakfastIcon />
        </Link>
      </div>
      
      {/* Image */}
      <Image className='w-full h-[60%] object-cover p-2 border' src={"/" + food?.image} alt={food?.name} height={500} width={500} />
      
      {/* Food name */}
      <h1 className="">{food?.name}</h1>
      
      {/* Nutrition details */}
      <div className="flex w-full h-[10%] text-[10px] justify-center items-center gap-2">
        <span className="text-bold opacity-80">fat: {food?.nutrition?.fat}</span>
        <span className="text-bold opacity-80">protein: {food?.nutrition?.protein}</span>
        <span className="text-bold opacity-80">carbs: {food?.nutrition?.carbs}</span>
      </div>
      
      {/* Star rating */}
      <div className="">
        {Array(Math.min(5, Math.floor(food?.stars))).fill(null).map((_, index) => (
          <StarIcon key={index} />
        ))}
        {Array(5 - Math.min(5, Math.floor(food?.stars))).fill(null).map((_, index) => (
          <StarBorderIcon key={index} />
        ))}
      </div>
      
      {/* Price */}
      <span className="">Rs. {food?.price} /-</span>

      {/* Admin controls: Edit and Delete buttons */}
      {admin && (
        <div className="flex gap-4 mt-2">
          <button
            className="p-2 bg-green-950 border text-yellow-100 rounded transition-all hover:bg-yellow-100 hover:text-green-950 hover:border hover:border-green-950"
            onClick={handleEdit}
          >
            <EditIcon />
          </button>
          <button
            className="p-2 bg-red-950 border text-yellow-100 rounded transition-all hover:bg-yellow-100 hover:text-red-950 hover:border hover:border-red-950"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </button>
        </div>
      )}
    </div>
  );
}

export default Foodcard;
