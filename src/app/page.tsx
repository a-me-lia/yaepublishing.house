import React from 'react';

const YaePublishingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/background.png)' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 flex flex-col">
        <header className="bg-[#fff0f2] p-6 text-center text-pink-400 font-bold text-3xl">
          Yae Publishing House
        </header>

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
