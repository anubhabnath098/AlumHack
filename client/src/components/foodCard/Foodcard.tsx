"use client"
import React, { useState } from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast';
import Image from 'next/image';
import Link from 'next/link';
function Foodcard({food}:any) {

  return (
    <div className='h-[300px] w-[250px] bg-white flex flex-col justidy-center items-center relative'>
        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center absolute transition-all top-[-7px] right-[-7px] z-20 bg-red-950 text-white hover:border hover:bg-white hover:text-red-950"><Link href={food.type=="drink"?"/menu/drink/"+food.id:"/menu/snack/"+food.id}><FreeBreakfastIcon/></Link></div>
        <Image className='w-full h-[60%] object-cover p-2 border' src={food?.image} alt="" height={500} width={500}/>
      <h1 className="">{food?.name}</h1>
      <div className="flex w-full h-[10%] text-[10px] justify-center items-center gap-2">
        <span className="text-bold opacity-80">fat: {food?.nutrition?.fat}</span>
        <span className="text-bold opacity-80">protein: {food?.nutrition?.protein}</span>
        <span className="text-bold opacity-80">carbs: {food?.nutrition?.carbs}</span>
      </div>
      <div className="">
        {Array(Math.min(5,Math.floor(food?.stars))).fill(null).map((_, index) => (
            <StarIcon key={index} />
        ))}
        {Array(5-Math.min(5,Math.floor(food?.stars))).fill(null).map((_, index) => (
            <StarBorderIcon key={index} />
        ))}
      </div>
      <span className="">Rs. {food?.price} /-</span>
      
    </div>
  )
}

export default Foodcard
