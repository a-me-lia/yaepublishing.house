'use client';

import Image from 'next/image';
import { useState } from 'react';

import AuthModal from './components/authModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <div className="relative flex items-center justify-center h-screen z-50">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          Open Auth Modal
        </button>

        {isModalOpen && <AuthModal closeModal={() => setIsModalOpen(false)} />}
      </div>
    </main>
  );
}
