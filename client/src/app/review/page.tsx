"use client";
import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect, useState} from 'react';
// import { fooddata } from '../menu/page';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/Footer';
import { useParams } from 'next/navigation';
import axios from 'axios';

const page = () => {
    const [allFoodItems, setAllfooditems] = useState([]);
    useEffect(()=>{
        try{
            const fetchData = async()=>{
                const response = await axios.get("http://localhost:5000/api/menu");
                console.log(response.data.data);
                setAllfooditems(response.data.data);
            }
            fetchData();
        }
        catch(err){
            console.log(err);
        }
    },[])
    

    return (
        <>
        <Navbar/>
        <div className="min-h-screen bg-yellow-100 p-5 flex flex-col items-center relative">
            <h1 className="text-2xl font-bold text-red-950 text-center mb-5">Food Items Review</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {allFoodItems.map(item => (
                    <div key={item?._id} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                        <Image src={"/"+item?.image} alt={item?.name} width={300} height={200} className="rounded h-48 w-full object-cover" />
                        <h2 className="font-semibold text-lg mt-2 text-red-950">{item?.name}</h2>
                        <p className="text-sm text-gray-600 flex-grow">{item?.desc}</p>
                        <Link href={`/review/${item?._id}`}>
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
