'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {

  return (
    <div className="relative min-h-screen bg-[#fff0f2] flex flex-col items-center">
      <div className="container mx-auto max-w-2xl p-6">
        <header className="text-center text-[#D1636B] font-bold text-4xl">
          Matthew Guo
        </header>
        <div className="mt-6 flex flex-col items-center">
          <Image
            src="/image.jpg"
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-[#D1636B]"
          />
          <div className="text-[#D1636B] mt-4 text-center">
            <p>
              Connect with me on <a href="https://www.linkedin.com/in/matthew-guo-5ab664293/" className="font-bold">LinkedIn</a>, 
              watch my videos on <a href="https://www.youtube.com/@marinzsh" className="font-bold">YouTube</a>, 
              and visit my <a href="https://paisleymicro.com" className="font-bold">company website</a>.
            </p>
          </div>
        </div>
        <Link href="/"><h2 className="mt-6 font-bold text-2xl hover:underline">- Back to home</h2></Link>
      </div>
    </div>
  );
}
