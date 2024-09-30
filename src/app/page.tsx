"use client"

import Image from 'next/image'

export default function Home() {
  return (
    <main className='h-[calc(100dvh)]'>
        <div className='w-full h-full absolute z-0'>
          <Image src='/background.png' alt='miko!' fill className='object-cover'></Image>
        </div>
    </main>
  )
}
