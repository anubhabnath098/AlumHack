"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { fooddata } from '../menu/page';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/Footer';

const page = () => {
    const allFoodItems = fooddata.flat();

    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-yellow-100 p-5 flex flex-col items-center relative">
            <h1 className="text-2xl font-bold text-red-950 text-center mb-5">Food Items Review</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allFoodItems.map(item => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                        <Image src={item.image} alt={item.name} width={300} height={200} className="rounded h-48 w-full object-cover" />
                        <h2 className="font-semibold text-lg mt-2 text-red-950">{item.name}</h2>
                        <p className="text-sm text-gray-600 flex-grow">{item.desc}</p>
                        <Link href={`/review/${item.id}`}>
                            <button className="inline-block mt-4 bg-green-950 text-white  border-2 py-2 px-4 text-center hover:bg-white hover:text-green-950 hover:border-green-950 transition-all">
                                Add Review
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default page;
