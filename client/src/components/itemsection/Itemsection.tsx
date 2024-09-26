import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Itemsection({item, value}:any) {
    let a=0;
    if(!value){
        a=1;
    }
  return (
    <div className='w-full flex flex-col justify-center items-center md:mt-[140px]'>
      <h1 className="text-[50px] font-serif w-[80%] h-[30%] text-center flex justify-center items-center">{a==0?`Our most popular Beverages`:`Our most popular Snacks Items`}</h1>
            <Link href="/menu" className='hover:underline text-bold border border-[#2d1b1b] p-2 z-10'>View All</Link>
            <div className="flex gap-6 w-[80%] h-[70%] justify-center items-center mt-20">
                
                {item[a].slice(0,3).map((i:any)=>(
                        <>
                            <div className="w-full h-full flex  items-center flex-col gap-4">
                                <Image className="sm:h-[50%] md:h-[50%] w-[80%] object-cover border border-[#2d1b1b] p-4" src={"/"+i?.image} alt="" height={500} width={500}/>
                                <button className="border border-[#2d1b1b] p-2 text-bold hover:underline">Order</button>
                                <h1 className="text-bold">{i?.name.toUpperCase()}</h1>
                                <p className="text-center p-2">{i?.desc.slice(0,100)+"..."}</p>
                            </div>
                        </>
                    ))}
            </div>    
    </div>
  )
}

export default Itemsection
