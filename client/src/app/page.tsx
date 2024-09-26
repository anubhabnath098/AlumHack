"use client"
import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar/navbar';
import Frontpage from '@/components/frontpage/Frontpage';

export default function Home() {

  return (
    <>
      <Navbar />
      <Frontpage />
    </>
  );
}

