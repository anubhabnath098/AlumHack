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
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
            image:"/cappuccino.jpg",
            reviews:9,
            upvote:20,
            downvote:5,
            stars:4
        },
        {
            id:2,
            name:"chocolate",
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
            image:"/chocolate.png",
            reviews:9,
            upvote:20,
            downvote:5,
            stars:4
        },
        {
            id:3,
            name:"cappuccino",
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
            image:"/cappuccino.jpg",
            reviews:9,
            upvote:20,
            downvote:5,
            stars:4
        },
        {
            id:4,
            name:"cappuccino",
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
            image:"/cappuccino.jpg",
            reviews:9,
            upvote:20,
            downvote:5,
            stars:4
        },
        {
            id:5,
            name:"cappuccino",
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
            image:"/cappuccino.jpg",
            reviews:9,
            upvote:20,
            downvote:5,
            stars:4
        },
        {
            id:6,
            name:"mojito",
            desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
            image:"/mojito.jpeg",
            reviews:9,
            upvote:20,
            downvote:5,
            stars:4
        }],
        [
            {
                id:7,
                name:"mojito",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/mojito.jpeg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            },
            {
                id:8,
                name:"cappuccino",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            },
            {
                id:9,
                name:"cappuccino",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            },
            {
                id:10,
                name:"cappuccino",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            },
            {
                id:11,
                name:"cappuccino",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            },
            {
                id:12,
                name:"cappuccino",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            }
        ],
        [
            {
                id:13,
                name:"maggi",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/maggi.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            },
            {
                id:14,
                name:"cappuccino",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            },
            {
                id:15,
                name:"maggi",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/maggi.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            },
            {
                id:16,
                name:"cappuccino",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            },
            {
                id:17,
                name:"cappuccino",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            },
            {
                id:18,
                name:"cappuccino",
                desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio quisquam atque quibusdam rem, obcaecati dolor reprehenderit laboriosam unde quaerat delectus.",
                image:"/cappuccino.jpg",
                reviews:9,
                upvote:20,
                downvote:5,
                stars:4
            }
        ]
    ]
    return (
        <div className='min-h-screen bg-[#2d1b1b] relative'>
            <Navbar />
            <Image className='absolute inset-0 h-full w-full object-cover opacity-35 z-0' src="/bg.jpg" alt="" height={1000} width={1000} />
            <div className="flex flex-col justify-center items-center relative z-10 pt-20"> {/* Added pt-20 for spacing below the navbar */}
                <div className="flex w-full justify-center items-center gap-5 mb-10">
                    <span className="hover:underline text-yellow-100 cursor-pointer" onClick={e => handleClick(0)}>Weekly</span>
                    <span className="hover:underline text-yellow-100 cursor-pointer" onClick={e => handleClick(1)}>Monthly</span>
                    <span className="hover:underline text-yellow-100 cursor-pointer" onClick={e => handleClick(2)}>Yearly</span>
                </div>

                <div className="w-full flex justify-center items-center flex-col gap-2 rounded mb-10">
                    {topdish[timeline] && topdish[timeline].slice(0, Math.min(topdish[timeline].length, 5)).map(dish => (
                        <LeaderboardCard dish={dish} key={dish.id} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default page;