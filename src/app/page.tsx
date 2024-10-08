'use client';

import Image from 'next/image';
import { useState } from 'react';

import AuthNav from './components/authNav';

export default function Home() {

  return (
    <main className="h-[calc(100dvh)]">
      <div className="w-full h-full absolute z-0">
        <Image
          src="/background.png"
          alt="miko!"
          fill
          className="object-cover"
        ></Image>
      </div>
      <div className='relative w-full top-0 z-50'>  {<AuthNav/>}</div>
      <div className="relative flex  flex-col items-center justify-center h-screen z-10 text-pink-500">
        <h1>love miko</h1>

      </div>
    </main>
  );
}
