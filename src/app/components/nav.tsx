import Link from 'next/link';

export default function Nav() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Collapsing Nav Container */}
      <div className="relative group">
        {/* Nav Button (Hamburger Icon) */}
        <div className="w-16 h-16 bg-red-600 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out group-hover:w-48 group-hover:rounded-xl">
          <div className="w-8 h-8 bg-yellow-500 rounded-full flex justify-center items-center">
            <div className="w-5 h-1 bg-red-600 my-1"></div>
            <div className="w-5 h-1 bg-red-600 my-1"></div>
            <div className="w-5 h-1 bg-red-600 my-1"></div>
          </div>
        </div>

        {/* Nav Links (Initially hidden, shows when expanded) */}
        <div className="absolute right-0 bottom-0 w-0 group-hover:w-48 bg-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
          <div className="flex flex-col justify-center  p-4 space-y-4">
            <Link href="/" className="hover:scale-105 text-yellow-500 text-xl font-bold transition-all duration-300">Home</Link>
            <Link href="/renminyingxiong" className="hover:scale-105 text-yellow-500 text-xl font-bold transition-all duration-300">Renminyingxiong Collection</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
