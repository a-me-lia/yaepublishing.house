'use client'

import Link from 'next/link';
import React from 'react';

const YaePublishingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#fff0f2] flex flex-col items-center">
      <div className="container mx-auto max-w-2xl p-6">
        <header className="text-center text-[#D1636B] font-bold text-4xl">
          <span style={{ fontFamily: 'Ma Shan Zheng' }}>八重堂</span>
        </header>
        <h2 className="text-center text-[#D1636B] font-bold text-2xl">
          Yae Publishing House
        </h2>

        {/* About Section */}
        <section className="mt-8">
          <h3 className="text-[#D1636B] font-bold text-xl">About This Website</h3>
          <p>
            Welcome to Yae Publishing House! <a href="/profile" className="text-[#D1636B] font-bold underline">Matthew Guo (Guo Ziyu 郭子玉)</a> owns this website. It is currently just a utility domain to route traffic, store setup scripts, and host tools. Maybe if Ziyu has time, he will publish some of his own works here.
          </p>
        </section>


        <Link href="https://chat.yaepublishing.house">
          <h2 className="mt-6 font-bold text-[#D1636B] text-2xl hover:underline">- Go to Chat</h2>
        </Link>


      </div>

      <footer className="bg-[#fff0f2] p-6 text-center text-[#D1636B]">
        <p>&copy; {new Date().getFullYear()} Yae Publishing House. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default YaePublishingPage;
