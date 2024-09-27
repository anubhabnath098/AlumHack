"use client";
import Footer from '@/components/footer/Footer';
import LeaderboardCard from '@/components/leaderboardCard/card';
import Navbar from '@/components/navbar/navbar';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Page() {
    const [timeline, setTimeline] = useState(0);
    const [topDishes, setTopDishes] = useState([]);

    const periods = ['weekly', 'monthly', 'yearly'];

    const handleClick = (value:any) => {
        setTimeline(value);
    };

    useEffect(() => {
        const fetchTopDishes = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/menu/leaderboard?period=${periods[timeline]}`);
                setTopDishes(response.data.data);
                //console.log(topDishes)
            } catch (error) {
                console.error('Error fetching top dishes:', error);
            }
        };

        fetchTopDishes();
    }, [timeline]);



    return (
        <div className='min-h-screen bg-[#2d1b1b] relative'>
            <Navbar />
            <Image className='absolute inset-0 h-full w-full object-cover opacity-35 z-0' src="/bg.jpg" alt="" height={1000} width={1000} />
            <div className="flex flex-col justify-center items-center relative z-10 pt-20">
                <div className="flex w-full justify-center items-center gap-5 mb-10">
                    <span className="hover:underline text-yellow-100 cursor-pointer" onClick={() => handleClick(0)}>Weekly</span>
                    <span className="hover:underline text-yellow-100 cursor-pointer" onClick={() => handleClick(1)}>Monthly</span>
                    <span className="hover:underline text-yellow-100 cursor-pointer" onClick={() => handleClick(2)}>Yearly</span>
                </div>

                <div className="w-full flex justify-center items-center flex-col gap-2 rounded mb-10">
                    {topDishes.slice(0, 5).map(dish => (
                        <LeaderboardCard dish={dish} key={dish._id} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Page;
