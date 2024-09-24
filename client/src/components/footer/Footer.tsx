import Link from 'next/link'
import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function Footer() {
  return (
    <>
    <div className='sm:h-[300px] md:h-[300px] bg-green-950 flex justify-center items-center text-yellow-100'>
      <div className="w-[90%] h-full grid grid-cols-4 justify-center items-center gap-4">
        <div className="w-[80%]">
            <h1 className="text-[30px] text-bold">Cafeteria</h1>
            <p className="text-[13px] text-green-200 opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex gap-2 mt-5">
               {/* social media */}
               <FacebookOutlinedIcon/>
               <RoomOutlinedIcon/>
               <LinkedInIcon/>
            </div>
        </div>
        <div className="">
            <h1 className="text-[24px]">Menu</h1>
            <Link href="/menu" className='text-green-200 opacity-70 hover:underline'>See Entire List</Link>
            <h1 className="mt-5 text-[24px]">Email</h1>
            <p className="text-green-200 opacity-70 ">cafeteria@iiita.ac.in</p>
        </div>
        <div className="">
            <h1 className="text-[24px]">Live Polls</h1>
            <Link className="text-green-200 opacity-70 hover:underline" href="poll">Take a look</Link>
            <h1 className="mt-5 text-[24px]">Location</h1>
            <p className="text-green-200 opacity-70 hover:underline">Inside IIITA Campus</p>
        </div>
        <div className="">
            <h1 className="text-[24px]">Discounts & Vouchers</h1>
            <Link href="" className='text-green-200 opacity-70 hover:underline'>List of Discounts</Link>
            <h1 className="mt-5 text-[24px]">Contact</h1>
            <p className="text-green-200 opacity-70">+91 1234567890</p>
        </div>
      </div>
      
    </div>
    <div className="w-full text-center text-green-200 opacity-70 bg-green-950">Copyright 2024. All Rights Reserved</div>
    </>
  )
}

export default Footer
