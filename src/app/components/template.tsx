import Image from 'next/image';

type FrontMatter = {
  title: string;
  date?: string;
  description?: string;
  mainImage?: string;
  subImage1?: string;
  subImage2?: string;
  subImage3?: string;
};

export default function MDXTemplate({
  frontMatter,
  children,
}: {
  frontMatter: FrontMatter;
  children: React.ReactNode;
}) {
  return (
    <div className="flex p-8 bg-red-200">
      {/* Left Side: Main Image and Sub Images */}
      <div className="w-1/2 flex flex-col items-center">
        {/* Main Image */}
        <div className="mb-4">
          <Image
            src={frontMatter.mainImage || '/placeholders/placeholder-main.png'}
            alt="Main Image"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>


      </div>

      {/* Right Side: Title, Date, Description, and Content */}
      <div className="w-1/2 ml-8">
        <h1 className="text-4xl font-bold mb-2">{frontMatter.title}</h1>
        {frontMatter.date && (
          <p className="text-gray-600 text-sm mb-2">{frontMatter.date}</p>
        )}
        {frontMatter.description && (
          <p className="text-gray-800 text-base mb-4">{frontMatter.description}</p>
        )}

        
        <div className="mt-4 mb-20">{children}</div>

                {/* Sub Images Row */}
                <div className="flex flex-row jusify-between gap-4 ">
          <Image
            src={frontMatter.subImage1 || '/placeholders/placeholder-sub1.jpg'}
            alt="Sub Image 1"
            width={180}
            height={120}
            className="rounded-lg shadow-md"
          />
          <Image
            src={frontMatter.subImage2 || '/placeholders/placeholder-sub2.png'}
            alt="Sub Image 2"
            width={180}
            height={120}
            className="rounded-lg shadow-md"
          />
          <Image
            src={frontMatter.subImage3 || '/placeholders/placeholder-sub3.jpg'}
            alt="Sub Image 3"
            width={180}
            height={120}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
