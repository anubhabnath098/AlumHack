import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
function Navbar() {
  return (
    <>
        <div className="flex justify-between z-40 top-0 items-center h-[50px] w-full text-yellow-100 bg-[#2d1b1b] fixed">
            <div className="font-serif ml-5 text-4xl hover:underline"><Link href='/'>Cafeteria</Link></div>
            <div className="flex gap-5 justify-center items-center">
                <h2 className='font-bold hover:underline'><Link href='/gallery'>Gallery</Link></h2>
                <h2 className='font-bold hover:underline'><Link href='/menu'>Menu</Link></h2>
                <h2 className='font-bold hover:underline'><Link href='/about'>About Us</Link></h2>
                <h2 className='font-bold hover:underline'><Link href='/leaderboard'>Leaderboard</Link></h2>
            </div>
            <div className="flex justify-center items-center gap-5 mr-5 z-20">
                <h2 className="font-bold hover:underline"><Link href='/login'>Log in</Link></h2>
                <h2 className="font-bold hover:underline"><Link href='/register'>Register</Link></h2>
                <h2 className=""><Link href='order'><ShoppingCartIcon/></Link></h2>
            </div>
        </div>
    </>
  )
}

export default Navbar
