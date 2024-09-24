"use client"
import LeaderboardCard from '@/components/leaderboardCard/card'
import Navbar from '@/components/navbar/navbar'
import React, { useState } from 'react'

function page() {
    const [timeline, setTimeline] = useState(0);
    const handleClick = (value)=>{
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
    <>
    <Navbar/>
    <div className='h-screen w-full relative top-[50px] bg-[#2d1b1b] flex flex-col justify-center items-center sm:h-[130vh] md:h-[160vh]'>
        <div className="flex w-full justify-center items-center gap-5 mb-10">
            <span className="hover:underline text-yellow-100 cursor-pointer" onClick={e=>handleClick(0)}>Weekly</span>
            <span className="hover:underline text-yellow-100 cursor-pointer" onClick={e=>handleClick(1)}>Monthly</span>
            <span className="hover:underline text-yellow-100 cursor-pointer" onClick={e=>handleClick(2)}>Yearly</span>
        </div>
        <div className="w-full h-[90%] flex justify-center items-center flex-col gap-2 rounded">
        {topdish[timeline]&&topdish[timeline].slice(0,Math.min(topdish[timeline].length,5)).map(dish=>(
            <LeaderboardCard dish={dish} key={dish.id}/>
        ))}
        </div>
        
    </div>
    </>
  )
}

export default page
