'use client';

import Image from 'next/image';
import Link from 'next/link';

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
      <div className="relative flex  flex-col items-center justify-center h-screen z-10 text-pink-500">
        <h1 className='font-bold text-4xl'>Yae Publishing House - Owned and operated by Matthew Guo</h1>
        <h1 className='font-bold text-xl'>Please check back later for updates to this site !</h1>
        <Link href="https://www.youtube.com/@marinzsh"><h1 className='font-bold text-2xl hover:underline'>Watch videos !</h1></Link>
      </div>
    </main>
  );
}
