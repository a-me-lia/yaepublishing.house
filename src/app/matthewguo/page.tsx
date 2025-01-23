'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {

  return (
<main className="h-[100dvh] relative">
  <div className="w-full h-full absolute z-0">
    <Image
      src="/background.png"
      alt="miko!"
      fill
      className="object-cover"
    />
  </div>
  <div className="relative flex flex-col items-center justify-center h-screen z-10">
    <div className="text-pink-200 bg-black/20 p-8 rounded-lg z-20">
      <h1 className="font-bold text-4xl">Cute Profile Page</h1>
      <div className="mt-6 flex flex-col items-center">
        <Image
          src="/image.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className="rounded-full border-4 border-pink-200"
        />
        <div className="text-white mt-4 text-center">
          <h2 className="font-bold text-2xl">Matthew Guo</h2>
          <p className="mt-2">This is a cute profile description that showcases the character's personality and interests.</p>
        </div>
      </div>
      <Link href="/"><h2 className="mt-6 font-bold text-2xl hover:underline">Go to home</h2></Link>
      <Link href="https://www.youtube.com/@marinzsh">
        <h2 className="font-bold text-2xl hover:underline">Watch videos!</h2>
      </Link>
    </div>
  </div>
</main>
  );
}
