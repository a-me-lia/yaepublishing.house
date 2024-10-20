'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

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
      <h1 className="font-bold text-4xl">Yae Publishing House - Owned and operated by Matthew Guo</h1>
      <h2 className="mt-6 font-bold text-xl">Please check back later for updates to this site!</h2>
      <Link href="https://www.youtube.com/@marinzsh">
        <h2 className="font-bold text-2xl hover:underline">Watch videos!</h2>
      </Link>
    </div>
  </div>
</main>
  );
}
