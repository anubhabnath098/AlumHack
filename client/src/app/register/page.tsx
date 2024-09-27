"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import axios from 'axios'
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async()=>{
    try{
      console.log(username, email, password);
      const response = await axios.post("http://localhost:5000/api/users/register",{
      username,
      email,
      password
    });
    console.log(response.data);
    localStorage.setItem('username',response.data?.username);
    localStorage.setItem('admin', response.data?.isAdmin);
    if(response.data.status===true){
      router.push("/login");
    }
  }
  catch(err){
    console.log(err);
  }
  }
  return (
    <>
      <div className="bg-[#2d1b1b] w-full h-screen flex justify-center items-center">
        <div className="flex h-[80%] md:w-[70%] sm:w-[90%] border text-white shadow-xl">
          <div className="sm:w-[30%] md:w-[45%] border h-full">
            <Image className="object-cover h-full w-full" src="/coffee3.avif" alt="" height={100} width={100}/>
          </div>
          <div className="sm:w-[70%] md:w-[55%] flex flex-col justify-center gap-5">
            <div className="w-full text-center text-[20px]">REGISTER TO <span className="font-serif italic text-[25px] text-yellow-100">CAFETERIA</span></div>
            <div className="flex gap-2 items-center">
              <h1 className="w-[30%] text-center">Username</h1>
              <input type="text" required className="p-2 px-4 bg-[#2d1b1b] border" placeholder='Enter your username' onChange={e=>setUsername(e.target.value)}/>
            </div>
            <div className="flex gap-2 items-center">
              <h1 className="w-[30%] text-center">Email</h1>
              <input type="email" required className="p-2 px-4 bg-[#2d1b1b] border" placeholder='Enter your email' onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="flex gap-2 items-center">
            <h1 className="w-[30%] text-center">Password</h1>
            <input type="password" required className="p-2 px-4 bg-[#2d1b1b] border" placeholder='Enter your password' onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div className="flex gap-2 items-center">
            <h1 className="w-[30%] text-center">Re-enter Password</h1>
            <input type="password" className="p-2 px-4 bg-[#2d1b1b] border" placeholder='Re-enter your password'/>
            </div>
            <h3 className="flex w-full justify-center items-center gap-3 text-[12px]">Already have an Account?<Link className="text-yellow-200 hover:underline" href="/login">Login</Link></h3>
            <div className="w-full flex justify-center items-center">
              <button className="border p-2 px-7 transition-all hover:bg-yellow-100 hover:text-red-950" onClick={handleSubmit}>Register</button>
            </div>
            <h3 className="flex w-full justify-center items-center gap-3 text-[12px]"><Link className="text-yellow-200 hover:underline" href="/forgot-password">forgot password?</Link></h3>
            <div className="w-full flex justify-center items-center gap-3"><GoogleIcon/><GitHubIcon/><FacebookIcon/></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
