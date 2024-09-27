"use client"
import Foodcard from '@/components/foodCard/Foodcard'
import Navbar from '@/components/navbar/navbar'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '@/components/footer/Footer';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useRouter } from 'next/navigation';
import axios from 'axios';
function page() {
  const [topDishes, setTopDishes] = useState([]);
  useEffect(() => {
    const fetchTopDishes = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/menu/leaderboard?period=weekly`);
            setTopDishes(response.data.data);
            //console.log(topDishes)
        } catch (error) {
            console.error('Error fetching top dishes:', error);
        }
    };

    fetchTopDishes();
},[]);
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

  const router = useRouter();
  const [item, setItem] = useState(true);
  const [admin, setAdmin] = useState(false);

  const handleclick = (value:Boolean)=>{
    if(value){
      setItem(true);
    }
    else{
      setItem(false);
    }
  }

  useEffect(()=>{
    const getAdminStatus = ()=>{
      const isAdmin = localStorage.getItem('admin');
      const boolAdmin = isAdmin==='true'
      console.log(boolAdmin);
      if(boolAdmin){
        setAdmin(true);
      }
      else{
        setAdmin(false)
      }
    }
    getAdminStatus();
  },[])
  
 
  return (
    <div className='w-full bg-yellow-100 text-red-950 flex flex-col justify-center items-center h-[100vh] sticky'>
      
      <div className=" overflow-y-scroll">
      <Navbar/>
      <div className="relative top-[50px] h-full w-full bg-yellow-100 flex justify-center items-center">
        <div className="w-full h-[60%] flex ">
          <div className="flex flex-col flex-1 items-center">
            {topDishes[0]?.type==='drink'?(<h1 className="font-serif text-[4rem] text-center p-4">It's Not Just A Beverage, It's an Experience !</h1>):(<h1 className="font-serif text-[4rem] text-center p-4">Taste Our Most Popular Snack, a savory treat!!</h1>)}
              <div className="flex gap-6">
                <button className="border border-red-950 bg-green-950 text-yellow-100 p-2 px-5 rounded shadow-sm hover:bg-yellow-100 hover:text-green-950 transition-all">Order</button>
                {fooddata.length!==0?(<Link href={"/menu/"+topDishes[0]?.type+"/"+topDishes[0]?._id}><button className="border-2 border-red-950 p-2 px-5 transition-all hover:bg-red-950 hover:text-yellow-100">View Details</button></Link>):""}
              </div>
              <div className="mt-10 w-full flex flex-col justify-center items-center">
                <p className="text-bold text-[20px] hover:underline"><Link href="">Reviews</Link></p>
                <div className="">
                  {Array(Math.min(5,Math.floor(topDishes[0]?topDishes[0].stars:5))).fill(null).map((_, index) => (
                  <StarIcon key={index} />
                    ))}
                    {Array(5-Math.min(5,Math.floor(topDishes[0]?topDishes[0].stars:5))).fill(null).map((_, index) => (
                        <StarBorderIcon key={index} />
                    ))}
                </div>
                    

              </div>
          </div>
          <div className="relative">
            <div className="p-1 h-[150px] w-[150px] rounded-full absolute left-[-40px] top-[-40px] bg-white border-2 border-red-950 flex justify-center items-center text-bold flex-col text-[20px]">{topDishes[0]?.name}<span className='text-[10px]'>#1 in Leaderboard</span></div>
            <Image src={"/"+topDishes[0]?.image} alt="" height={1000} width={1000} className='w-[90%] h-[90%] object-cover p-3 border-2 border-red-950'/>
          </div>
            
        </div>
        </div>
        <div className="w-full relative">
            <div className="flex w-full justify-center items-center gap-10 mb-10 relative z-10 bg-yellow-100">
                <span className="text-bold hover:underline cursor-pointer flex gap-2 text-red-950 z-30" onClick={e=>handleclick(true)}>Drinks <LocalCafeOutlinedIcon/></span>
                <span className="text-bold hover:underline cursor-pointer flex gap-2 text-red-950 z-30" onClick={e=>handleclick(false)}>Snacks<LunchDiningOutlinedIcon/></span>
                {admin?(<span className="text-bold hover:underline cursor-pointer flex gap-2 text-red-950 z-30" onClick={e=>router.push("/menu/additem")}>Add Item<AddBoxIcon/></span>):(<span></span>)}
            </div>
            <div className="w-full flex flex-wrap gap-5 h-full justify-center items-end pb-10 relative">
                {fooddata&&item==true? (fooddata[0].map(food=>(
                  <Foodcard food={food} key={food._id} admin={admin}/>
                ))):(fooddata[1].map(food=>(
                  <Foodcard food={food} key={food._id} admin={admin}/>
                )))}
                
                    
                
            </div>
            <Footer/>
        </div>
        
        
        </div>
      

      
    </div>
  )
}

export default page
