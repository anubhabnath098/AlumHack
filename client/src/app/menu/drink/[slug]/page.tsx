"use client";
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import { fooddata } from '../../page';
import Image from 'next/image';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Page() {
    let router = useRouter();
    const { slug } = useParams();
    let fooditem = fooddata[0].filter(data => slug === data.id?.toString());
    const [qty, setQty] = useState(0);
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);

    const goBack = () => {
        router.back();
    }

    const handleUpvote = () => {
        if (downvoted) {
            setDownvoted(false);
            fooditem[0].downvote -= 1;
        }
        setUpvoted(prev => !prev);
        fooditem[0].upvote += upvoted ? -1 : 1;
    }

    const handleDownvote = () => {
        if (upvoted) {
            setUpvoted(false);
            fooditem[0].upvote -= 1;
        }
        setDownvoted(prev => !prev);
        fooditem[0].downvote += downvoted ? -1 : 1;
    }

    return (
        <div className='w-full h-screen flex justify-center items-center bg-yellow-100 z-0'>
            <Image src="/background.png" alt="" height={1000} width={1000} className='absolute h-full w-full top-0 z-10 object-cover' />
            <div className="h-[80%] w-[50%] rounded bg-white border border-gray-500 flex z-20">
                <div className="w-[50%] flex flex-col justify-center items-center gap-4">
                    <div className="h-[50px] w-[50px] rounded-full border-2 flex justify-center items-center self-start ml-14 cursor-pointer" onClick={goBack}><ArrowBackIcon /></div>
                    <Image className="w-[70%] h-[40%] p-2 border-2 border-gray-300 object-cover" src={fooditem[0].image} alt="" height={1000} width={1000} />
                    <h1 className="font-serif text-red-950 text-bold text-[30px]">{fooditem[0].name}</h1>
                    {fooditem[0].availability ? (
                        <span className='border border-green-700 p-2 text-green-700'>Available</span>
                    ) : (
                        <span className='border border-red-700 p-2 text-red-700'>Out of Stock</span>
                    )}
                    {fooditem[0].availability && (
                        <div className="rounded text-bold border-2 border-green-950 cursor-pointer w-[100px] h-[40px] flex justify-center items-center gap-2 text-red-950">
                            <AddIcon onClick={() => setQty(qty + 1)} />{qty === 0 ? "Add" : `${qty}`}<RemoveIcon onClick={() => setQty(Math.max(0, qty - 1))} />
                        </div>
                    )}
                </div>
                <div className="h-full w-[50%] flex flex-col">
                    <div className="h-[80%] w-[90%] flex flex-col justify-center gap-3">
                        <span className="">{fooditem[0].desc}</span>
                        <div className="">
                            <h1 className="text-bold">Nutritional Value per serving</h1>
                            <span className="flex gap-3">
                                <span>Protein: {fooditem[0]?.nutrition?.protein} </span>
                                <span>Carbs: {fooditem[0]?.nutrition?.carbs}</span>
                                <span>Fat: {fooditem[0]?.nutrition?.fat}</span>
                            </span>
                        </div>
                        <div className="">
                            {Array(Math.min(5, Math.floor(fooditem[0].stars))).fill(null).map((_, index) => (
                                <StarIcon key={index} />
                            ))}
                            {Array(5 - Math.min(5, Math.floor(fooditem[0].stars))).fill(null).map((_, index) => (
                                <StarBorderIcon key={index} />
                            ))}
                        </div>
                        <div className="flex gap-5">
                            <span className="flex gap-1 cursor-pointer" onClick={handleUpvote}>
                                <ThumbUpOutlinedIcon />
                                {fooditem[0].upvote}
                            </span>
                            <span className="flex gap-1 cursor-pointer" onClick={handleDownvote}>
                                <ThumbDownOutlinedIcon />
                                {fooditem[0].downvote}
                            </span>
                            <span className="flex gap-1 cursor-pointer">
                                <Link href={"/review/" + slug}>
                                    <ModeCommentOutlinedIcon />
                                </Link>
                                {fooditem[0].reviews}
                            </span>
                        </div>
                    </div>
                    <div className="h-[20%] w-[90%] flex">
                        <button className="border-2 w-[50%] h-[50px] mr-3 rounded bg-orange-300 transition-all">Add to Template</button>
                        <button className="border-2 w-[50%] h-[50px] rounded bg-green-950 text-yellow-100">Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
