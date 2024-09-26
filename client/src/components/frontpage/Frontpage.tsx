"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ReviewCard from '../reviewCards/Reviewcard';
import Itemsection from '../itemsection/Itemsection';
import Footer from '../footer/Footer';
import axios from 'axios';
function Frontpage() {
    const [item, setItem] = useState(true);
    const handleclick = (value:boolean)=>{
        if(value){
            setItem(true);
        }
        else{
            setItem(false);
        }
    }
    const [fooddata, setFooddata] = useState([
        [
          {
            _id:1,
            name:"Sandwich",
            type:"snacks",
            availability:true,
            image:"sandwich.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo tempora vitae qui sit dignissimos, assumenda quisquam eos eveniet animi fuga eaque consectetur culpa cupiditate nemo veniam alias sequi nihil!",
            nutrition:{
              fat:"20 kcal",
              protein:"5.2 gm",
              carbs:"100 kcal"
            },
            quantity:"1 plate",
            price:60,
            reviews:5,
            upvote:20,
            downvote:6,
            stars:4
          }
        ],
        [
          {
            _id:2,
            name:"Cheeze Sandwich",
            type:"snacks",
            availability:true,
            image:"sandwich.jpg",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo tempora vitae qui sit dignissimos, assumenda quisquam eos eveniet animi fuga eaque consectetur culpa cupiditate nemo veniam alias sequi nihil!",
            nutrition:{
              fat:"20 kcal",
              protein:"5.2 gm",
              carbs:"100 kcal"
            },
            quantity:"1 plate",
            price:65,
            reviews:5,
            upvote:20,
            downvote:6,
            stars:4
          }
        ]
      ]);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://localhost:5000/api/menu");
            console.log(response.data);
            const completeFood = response.data.data;
            if (completeFood) {
              setFooddata([
                completeFood.filter(food => food.type === 'drink'),
                completeFood.filter(food => food.type === 'snack')
              ]);
            }
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchData();
      }, []);
  return (
    <>
    <div className='bg-[#2d1b1b] w-full md:h-[800px] flex text-white sm:h-[900px]'>
      <div className="h-full flex text-white flex-col w-[60%] p-[5px] pl-7 gap-7">
        <div className="relative top-[140px] flex flex-col h-[70%] gap-2 w-full items-center justify-center">
            <h1 className="text-[60px] font-serif w-[70%]">Premium Coffee At Your Table</h1>
            <p className="w-[70%] mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe beatae nesciunt hic amet magni suscipit minima vitae molestias.
            </p>
            <button className="w-[70%] flex cursor-default"><Link className='border p-3 text-bold transition-all hover:bg-white hover:text-[#2d1b1b] z-30' href="/menu">Order Now</Link></button>
            <div className="h-[30%] w-[70%] font-serif text-[1.5rem] mt-10">
                <Link className=' transition-all hover:text-yellow-200 relative z-30' href="/review">Leave a Review </Link><ChevronRightIcon/>
            </div>
            <div className="h-[70%] w-[70%] flex justify-end "><ReviewCard/></div>
        </div>
      </div>
      <div className="flex flex-col h-full w-[40%] justify-center items-center relative">
        <div className="flex font-serif transition-all absolute w-full h-full justify-center items-center z-10"><Link className='relative transition-all text-center  border-[3px] text-bold border-red-950 p-2 bg-gray-50 text-amber-950 hover:bg-red-950 hover:text-white  hover:border-white' href="/gallery">See Gallery</Link><ChevronRightIcon/>
        </div>
        <Image className="opacity-95 w-[70%] h-[70%] object-contain relative left-[-10px]" src ="/collage.png" alt="" width={1000} height={1000}/>
      
      </div>
      
    </div>
        <div className="sm:h-[900px] md:h-[1000px] w-full bg-yellow-100 text-[#2d1b1b] flex flex-col justify-center items-center pb-10 relative">
            <div className="flex w-full justify-center items-center gap-10 mb-10 h-full absolute sm:top-[-400px] md:top-[-350px]">
                <span className="text-bold hover:underline cursor-pointer flex gap-2" onClick={e=>handleclick(true)}>Drinks <LocalCafeOutlinedIcon/></span>
                <span className="text-bold hover:underline cursor-pointer flex gap-2" onClick={e=>handleclick(false)}>Snacks<LunchDiningOutlinedIcon/></span>
            </div>
            <Itemsection item={fooddata} value={item}/>
        </div>
        <Footer/>
    </>
  )
}

export default Frontpage
