"use client"
import React, { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';

function Navbar() {
  const [username, setUsername] = useState("");
  const [admin, setAdmin] = useState(false);
  useEffect(()=>{
    const user = localStorage.getItem('username');
    const isAdmin = localStorage.getItem('admin')==='true'
    if(user){
      setUsername(user);
      setAdmin(isAdmin);
    }
    else{
      setUsername("");
    }
    
  },[])
  return (
    <>
      <div className="flex justify-between z-40 top-0 items-center h-[50px] w-full text-yellow-100 bg-[#2d1b1b] fixed">
        {/* Logo */}
        <div className="font-serif ml-5 text-4xl hover:underline">
          <Link href="/">Cafeteria</Link>
        </div>

        {/* Navigation Links */}
        <div className="flex gap-5 justify-center items-center">
          <h2 className="font-bold hover:underline">
            <Link href="/gallery">Gallery</Link>
          </h2>
          <h2 className="font-bold hover:underline">
            <Link href="/menu">Menu</Link>
          </h2>
          <h2 className="font-bold hover:underline">
            <Link href="/about">About Us</Link>
          </h2>
          <h2 className="font-bold hover:underline">
            <Link href="/leaderboard">Leaderboard</Link>
          </h2>
        </div>

        {/* User Actions (Login/Register/Shopping Cart) */}
        <div className="flex justify-center items-center gap-5 mr-5 z-20">
          {/* If username is not defined or empty, show login/register, else show username */}
          {username==="" ? (
            <>
              <h2 className="font-bold hover:underline">
                <Link href="/login">Log in</Link>
              </h2>
              <h2 className="font-bold hover:underline">
                <Link href="/register">Register</Link>
              </h2>
            </>
          ) : (
            <>Hello, {username} <span className='cursor-pointer text-bold' onClick={()=>{setUsername(""); localStorage.removeItem('username'); localStorage.removeItem('admin'); setAdmin(false)}}>Sign Out</span></>
          )}
          <h2>
            <Link href="/order">
              <ShoppingCartIcon />
            </Link>
          </h2>
        </div>
      </div>
    </>
  );
}

export default Navbar;
