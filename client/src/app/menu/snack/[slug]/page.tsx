"use client";
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
// import { fooddata } from '../../page';
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
import axios from 'axios'
import Link from 'next/link';

function Page() {
    
    let router = useRouter();
    const { slug } = useParams();
    const [fooditem, setFoodItem] = useState(
            {_id:4,
            name:"Cold Coffee",
            availability:true,
            type:"drink",
            image:"coldcoffee.avif",
            desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo tempora vitae qui sit dignissimos, assumenda quisquam eos eveniet animi fuga eaque consectetur culpa cupiditate nemo veniam alias sequi nihil!",
            nutrition:{
              fat:"20 kcal",
              protein:"5.2 gm",
              carbs:"100 kcal"
            },
            quantity:"500 ml",
            price:60,
            reviews:5,
            upvote:20,
            downvote:6,
            stars:4
          })
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const response = await axios.get(`http://localhost:5000/api/menu/${slug}`);
                console.log(response);
                if(response.data.data){
                    setFoodItem(response.data.data);
                }
            }
            catch(err){

            }
        }
        fetchData();
    },[])
    const [qty, setQty] = useState(0);
    const [upvoted, setUpvoted] = useState(false);
    const [downvoted, setDownvoted] = useState(false);

    useEffect(() => {
        const updateVotesInDatabase = async () => {
            console.log(upvoted, downvoted, fooditem._id);
            const username = localStorage.getItem('username');
            try {
                await axios.patch(`http://localhost:5000/api/menu/votes/${fooditem._id}`, {
                    userId:username,
                    upvoteChange: upvoted ? 1 : (downvoted ? -1 : 0),
                    downvoteChange: downvoted ? 1 : (upvoted ? -1 : 0),
                });
            } catch (error) {
                console.error('Error updating votes:', error);
            }
        };

        // Only call the function if either upvote or downvote has changed
        if (upvoted || downvoted) {
            updateVotesInDatabase();
        }
    }, [upvoted, downvoted, fooditem._id]);

    const goBack = () => {
        router.back();
    }

    const handleUpvote = () => {
        const username = localStorage.getItem('username');
        const userId = username; // Get the current user's ID from your authentication context
        
        if (upvoted) {
            // User is trying to upvote again, decrement the upvote count
            setFoodItem(prev => ({
                ...prev,
                upvote: prev.upvote - 1,
            }));
            setUpvoted(false); // Remove upvote
            updateVotes(userId, { upvoteChange: -1, downvoteChange: 0 });
        } else {
            // If user has downvoted, switch to upvote
            if (downvoted) {
                setFoodItem(prev => ({
                    ...prev,
                    downvote: prev.downvote - 1,
                    upvote: prev.upvote + 1,
                }));
                setDownvoted(false); // Remove downvote
                setUpvoted(true); // Set upvote
                updateVotes(userId, { upvoteChange: 1, downvoteChange: -1 });
            } else {
                // User is voting for the first time
                setFoodItem(prev => ({
                    ...prev,
                    upvote: prev.upvote + 1,
                }));
                setUpvoted(true);
                updateVotes(userId, { upvoteChange: 1, downvoteChange: 0 });
            }
        }
    };
    
    
    const handleDownvote = () => {
        const username = localStorage.getItem('username');
        const userId = username;
    
        if (downvoted) {
            // User is trying to downvote again, decrement the downvote count
            setFoodItem(prev => ({
                ...prev,
                downvote: prev.downvote - 1,
            }));
            setDownvoted(false); // Remove downvote
            updateVotes(userId, { upvoteChange: 0, downvoteChange: -1 });
        } else {
            // If user has upvoted, switch to downvote
            if (upvoted) {
                setFoodItem(prev => ({
                    ...prev,
                    upvote: prev.upvote - 1,
                    downvote: prev.downvote + 1,
                }));
                setUpvoted(false); // Remove upvote
                setDownvoted(true); // Set downvote
                updateVotes(userId, { upvoteChange: -1, downvoteChange: 1 });
            } else {
                // User is voting for the first time
                setFoodItem(prev => ({
                    ...prev,
                    downvote: prev.downvote + 1,
                }));
                setDownvoted(true);
                updateVotes(userId, { upvoteChange: 0, downvoteChange: 1 });
            }
        }
    };
    
    
    const updateVotes = async (userId, { upvoteChange, downvoteChange }) => {
        try {
            await axios.patch(`http://localhost:5000/api/menu/votes/${fooditem._id}`, {
                userId,
                upvoteChange,
                downvoteChange,
            });
        } catch (error) {
            console.error('Error updating votes:', error);
            // Revert state if there's an error
            if (upvoteChange < 0) {
                setFoodItem(prev => ({
                    ...prev,
                    upvote: prev.upvote + 1,
                }));
                setUpvoted(true);
            } else if (downvoteChange < 0) {
                setFoodItem(prev => ({
                    ...prev,
                    downvote: prev.downvote + 1,
                }));
                setDownvoted(true);
            }
            alert('Failed to update votes. Please try again.');
        }
    };
    
    

    return (
        <div className='w-full h-screen flex justify-center items-center bg-yellow-100 z-0'>
            <Image src="/background.png" alt="" height={1000} width={1000} className='absolute h-full w-full top-0 z-10 object-cover' />
            <div className="h-[80%] w-[50%] rounded bg-white border border-gray-500 flex z-20">
                <div className="w-[50%] flex flex-col justify-center items-center gap-4">
                    <div className="h-[50px] w-[50px] rounded-full border-2 flex justify-center items-center self-start ml-14 cursor-pointer" onClick={goBack}><ArrowBackIcon /></div>
                    <Image className="w-[70%] h-[40%] p-2 border-2 border-gray-300 object-cover" src={"/"+fooditem?.image} alt="" height={1000} width={1000} />
                    <h1 className="font-serif text-red-950 text-bold text-[30px]">{fooditem?.name}</h1>
                    {fooditem?.availability ? (
                        <span className='border border-green-700 p-2 text-green-700'>Available</span>
                    ) : (
                        <span className='border border-red-700 p-2 text-red-700'>Out of Stock</span>
                    )}
                    {fooditem?.availability && (
                        <div className="rounded text-bold border-2 border-green-950 cursor-pointer w-[100px] h-[40px] flex justify-center items-center gap-2 text-red-950">
                            <AddIcon onClick={() => setQty(qty + 1)} />{qty === 0 ? "Add" : `${qty}`}<RemoveIcon onClick={() => setQty(Math.max(0, qty - 1))} />
                        </div>
                    )}
                </div>
                <div className="h-full w-[50%] flex flex-col">
                    <div className="h-[80%] w-[90%] flex flex-col justify-center gap-3">
                        <span className="">{fooditem?.desc}</span>
                        <div className="">
                            <h1 className="text-bold">Nutritional Value per serving</h1>
                            <span className="flex gap-3">
                                <span>Protein: {fooditem?.nutrition?.protein} </span>
                                <span>Carbs: {fooditem?.nutrition?.carbs}</span>
                                <span>Fat: {fooditem?.nutrition?.fat}</span>
                            </span>
                        </div>
                        <div className="">
                            {Array(Math.min(5, Math.floor(fooditem?.stars))).fill(null).map((_, index) => (
                                <StarIcon key={index} />
                            ))}
                            {Array(5 - Math.min(5, Math.floor(fooditem?.stars))).fill(null).map((_, index) => (
                                <StarBorderIcon key={index} />
                            ))}
                        </div>
                        <div className="flex gap-5">
                            <span className="flex gap-1 cursor-pointer" onClick={handleUpvote}>
                                <ThumbUpOutlinedIcon />
                                {fooditem?.upvote}
                            </span>
                            <span className="flex gap-1 cursor-pointer" onClick={handleDownvote}>
                                <ThumbDownOutlinedIcon />
                                {fooditem?.downvote}
                            </span>
                            <span className="flex gap-1 cursor-pointer">
                                <Link href={"/review/" + slug}>
                                    <ModeCommentOutlinedIcon />
                                </Link>
                                {fooditem?.reviews}
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
