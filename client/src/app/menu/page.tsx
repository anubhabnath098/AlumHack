"use client"
import Foodcard from '@/components/foodCard/Foodcard'
import Navbar from '@/components/navbar/navbar'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '@/components/footer/Footer';
export const fooddata = [
  {
    id:1,
    name:"Cappuccino",
    availability:true,
    type:"drink",
    image:"/coffee4.avif",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illo tempora vitae qui sit dignissimos, assumenda quisquam eos eveniet animi fuga eaque consectetur culpa cupiditate nemo veniam alias sequi nihil!",
    nutrition:{
      fat:"20 kcal",
      protein:"5.2 gm",
      carbs:"100 kcal"
    },
    quantity:"100 ml",
    price:60,
    reviews:5,
    upvote:20,
    downvote:6,
    stars:4
  },
  {
    id:2,
    name:"Blue Lagoon",
    availability:true,
    type:"drink",
    image:"/bluelagoon1.avif",
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
  },
  {
    id:3,
    name:"Virgin Mojito",
    availability:false,
    type:"drink",
    image:"/mojito1.avif",
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
  },
  {
    id:4,
    name:"Cold Coffee",
    availability:true,
    type:"drink",
    image:"/coldcoffee.avif",
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
  },
  {
    id:5,
    name:"Cold Coffee",
    availability:false,
    type:"drink",
    image:"/coldcoffee.avif",
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
  },
  {id:6,
    name:"Cold Coffee",
    type:"drink",
    availability:true,
    image:"/coldcoffee.avif",
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
  }
  
]
function page() {
 
  return (
    <div className='w-full bg-yellow-100 text-red-950 flex flex-col justify-center items-center h-[100vh] sticky'>
      
      <div className=" overflow-y-scroll">
      <Navbar/>
      <div className="relative top-[50px] h-screen w-full bg-yellow-100 flex justify-center items-center">
        <div className="w-full h-[60%] flex ">
          <div className="flex flex-col flex-1 items-center">
            <h1 className="font-serif text-[4rem] text-center">It's Not Just A Beverage, It's an Experience !</h1>
              <div className="flex gap-6">
                <button className="border border-red-950 bg-green-950 text-yellow-100 p-2 px-5 rounded shadow-sm hover:bg-yellow-100 hover:text-green-950 transition-all">Order</button>
                <button className="border-2 border-red-950 p-2 px-5 transition-all hover:bg-red-950 hover:text-yellow-100">View Details</button>
              </div>
              <div className="mt-10 w-full flex flex-col justify-center items-center">
                <p className="text-bold text-[20px] hover:underline"><Link href="">Reviews</Link></p>
                <div className="">
                  {Array(Math.min(5,Math.floor(fooddata[0]?.stars))).fill(null).map((_, index) => (
                  <StarIcon key={index} />
                    ))}
                    {Array(5-Math.min(5,Math.floor(fooddata[0]?.stars))).fill(null).map((_, index) => (
                        <StarBorderIcon key={index} />
                    ))}
                </div>
                    

              </div>
          </div>
          <div className="relative">
            <div className="p-1 h-[150px] w-[150px] rounded-full absolute left-[-40px] top-[-40px] bg-white border-2 border-red-950 flex justify-center items-center text-bold flex-col text-[20px]">{fooddata[0].name}<span className='text-[10px]'>#1 in Leaderboard</span></div>
            <Image src={fooddata[0]?.image} alt="" height={1000} width={1000} className='w-[90%] h-[90%] object-cover p-3 border-2 border-red-950'/>
          </div>
            
        </div>
        </div>
        <div className="w-full flex flex-wrap gap-5 h-[40%] justify-center items-center pb-10">
          {fooddata&& fooddata.map(food=>(
            <Foodcard food={food} key={food.id}/>
          ))}
          <div className="w-full">
          <Footer/>
          </div>
          
          

        </div>
        
        </div>
      

      
    </div>
  )
}

export default page
