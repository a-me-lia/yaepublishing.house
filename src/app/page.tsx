'use client'

import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const YaePublishingPage: React.FC = () => {
  const { data: session, status } = useSession()
  const isLoggedIn = status === 'authenticated'

  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background.png)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col">
        <header className="bg-[#fff0f2] p-6 text-center text-pink-400 font-bold text-3xl">
          Yae Publishing House
        </header>
        <nav className="bg-[#fff0f2] p-4 flex justify-end items-center">
          <div className="space-x-4">
            {!isLoggedIn ? (
              <>
                <button 
                  className="px-4 py-2 text-pink-400 hover:text-pink-600 font-medium"
                  onClick={() => signIn()}
                >
                  Login
                </button>
                <button
                  className="px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors"
                  onClick={() => window.location.href = '/signup'}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <button 
                className="px-4 py-2 text-pink-400 hover:text-pink-600 font-medium"
                onClick={() => signOut()}
              >
                Logout
              </button>
            )}
          </div>
        </nav>
        <nav className="flex justify-center space-x-8 p-6">
          {/* Show these buttons only when logged in */}
          {isLoggedIn && (
            <>
              <button
                className="px-6 py-3 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors flex items-center space-x-2"
                onClick={() => window.location.href = '/write'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
                <span>Write a Story</span>
              </button>
              
              <button
                className="px-6 py-3 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors flex items-center space-x-2"
                onClick={() => window.location.href = '/drafts'}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span>My Drafts</span>
              </button>
            </>
          )}

          {/* Browse Stories button is always visible */}
          <button
            className="px-6 py-3 bg-pink-400 text-white rounded-lg hover:bg-pink-500 transition-colors flex items-center space-x-2"
            onClick={() => window.location.href = '/browse'}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span>Browse Stories</span>
          </button>
        </nav>

        <main className="flex-grow p-8">
          <section className="mb-16">
            <h2 className="text-4xl font-extrabold text-pink-400 mb-4">Welcome to Yae Publishing House</h2>
            <p className="text-lg text-white">
              Greetings, wanderer, and welcome to the grand halls of <span className="font-bold">Yae Publishing House</span>&mdash;a realm where stories come to life, and the written word holds untold power.
            </p>
            <p className="text-lg text-white mt-4">
              Once thought to be a humble collection of paper and ink, Yae Publishing House has grown into a sanctuary for the curious, the brave, and those who seek knowledge from the deepest corners of the world. Its library, vast and ever-expanding, is home to rare tomes, ancient scrolls, and modern masterpieces alike. Here, words weave magic, and each page turns with the promise of new adventures.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-extrabold text-pink-400 mb-4">Our Legacy</h2>
            <p className="text-lg text-white">
              Founded in an era lost to time, Yae Publishing House has long been a beacon for storytellers and authors across the lands. From epic tales of courage and heroism to subtle whispers of forgotten lore, the house stands as a testament to the power of storytelling. Our collections span centuries, crossing both space and time, offering something for every soul who dares to read.
            </p>
          </section>



          <section>
            <h2 className="text-3xl font-extrabold text-pink-400 mb-4">About the House</h2>
            <p className="text-lg text-white">
              Yae Publishing House is more than just a place to find stories&mdash;it is where your own story begins. Whether you&apos;re a writer, an artist, or someone simply seeking inspiration, our house invites you to explore, create, and leave your mark. Come with an open heart and an inquisitive mind, for the words you seek may not always be where you expect them. But they are always waiting, just beyond the next turn of the page.
            </p>
          </section>
        </main>

        <footer className="bg-[#fff0f2] p-6 text-center text-pink-400">
          <p>&copy; {new Date().getFullYear()} Yae Publishing House. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default YaePublishingPage;
