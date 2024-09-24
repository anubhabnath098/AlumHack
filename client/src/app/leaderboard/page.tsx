"use client"
import Footer from '@/components/footer/Footer';
import LeaderboardCard from '@/components/leaderboardCard/card'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image';
import React, { useState } from 'react'

function page() {
    const [timeline, setTimeline] = useState(0);
    const handleClick = (value:any)=>{
        setTimeline(value);
    }
    const topdish = [
        [{
            id:1,
            name:"cappuccino",
            image:"/cappuccino.jpg",
            reviews:9,
            upvote:20,
            downvote:5
        },
        {
            id:2,
            name:"chocolate",
            image:"/chocolate.png",
            reviews:9,
            upvote:20,
            downvote:5
        },
        {
            id:3,
            name:"cappuccino",
            image:"/cappuccino.jpg",
            reviews:9,
            upvote:20,
            downvote:5
        },
        {
            id:4,
            name:"cappuccino",
            image:"/cappuccino.jpg",
            reviews:9,
            upvote:20,
            downvote:5
        },
        {
            id:5,
            name:"cappuccino",
            image:"/cappuccino.jpg",
            reviews:9,
            upvote:20,
            downvote:5
        },
        {
            id:6,
            name:"mojito",
            image:"/mojito.jpeg",
            reviews:9,
            upvote:20,
            downvote:5
        }],
        [
            {
                id:7,
                name:"mojito",
                image:"/mojito.jpeg",
                reviews:9,
                upvote:20,
                downvote:5
            },
            {
                id:8,
                name:"cappuccino",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            },
            {
                id:9,
                name:"cappuccino",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            },
            {
                id:10,
                name:"cappuccino",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            },
            {
                id:11,
                name:"cappuccino",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            },
            {
                id:12,
                name:"cappuccino",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            }
        ],
        [
            {
                id:13,
                name:"maggi",
                image:"/maggi.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            },
            {
                id:14,
                name:"cappuccino",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            },
            {
                id:15,
                name:"maggi",
                image:"/maggi.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            },
            {
                id:16,
                name:"cappuccino",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            },
            {
                id:17,
                name:"cappuccino",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            },
            {
                id:18,
                name:"cappuccino",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5
            }
        ]
    ]
  return (
    <div className='sticky h-[100vh] w-full'>
    <div className='w-full relative bg-[#2d1b1b] flex flex-col justify-center items-center h-full overflow-y-scroll z-0'>
        <Navbar/>
        <Image className='absolute h-[140vh] w-full opacity-35 object-cover z-10' src="/bg.jpg" alt="" height={1000} width={1000}/>
        <div className="text-bold flex w-full justify-center items-center gap-5 mb-10 z-20 relative top-[65%]">
            <span className="hover:underline text-yellow-100 cursor-pointer" onClick={e=>handleClick(0)}>Weekly</span>
            <span className="hover:underline text-yellow-100 cursor-pointer" onClick={e=>handleClick(1)}>Monthly</span>
            <span className="hover:underline text-yellow-100 cursor-pointer" onClick={e=>handleClick(2)}>Yearly</span>
        </div>
        <div className="w-full flex justify-center items-center flex-col gap-2 rounded z-20 relative top-[60%]">
            {topdish[timeline]&&topdish[timeline].slice(0,Math.min(topdish[timeline].length,5)).map(dish=>(
                <LeaderboardCard dish={dish} key={dish.id}/>
            ))}

            <div className="w-full"><Footer/></div>
        </div>
        
        
    </div>
    </div>
  )
}

export default page
