import Image from 'next/image'
import React from 'react'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
function LeaderboardCard({dish}:any) {
  return (
    <div className="w-[80%] border h-[200px] flex text-yellow-100 gap-2">
      <div className="w-[20%]"><Image className="h-full w-full object-cover border-2 p-2" src={dish?.image} alt="" height={1000} width={1000}/></div>
      <div className="w-full flex flex-col justify-center pl-10 gap-4 bg-yellow-100 text-green-950">
        <h1 className="text-bold">{dish?.name?.toUpperCase()}</h1>
        <div className="flex text-green-950 gap-10">
            <div className='flex gap-1'><ThumbUpOutlinedIcon/>{dish?.upvote}</div>
            <div className='flex gap-1'><ThumbDownOutlinedIcon/>{dish?.downvote}</div>
            <div className='flex gap-1'><ModeCommentOutlinedIcon/>{dish?.reviews}</div>
            <button className=" text-bold border-2 p-1 px-5 transition-all border-green-950 hover:bg-green-950 hover:border-green-950 hover:text-yellow-100">Order</button>
        </div>
      </div>
    </div>
  )
}

export default LeaderboardCard
