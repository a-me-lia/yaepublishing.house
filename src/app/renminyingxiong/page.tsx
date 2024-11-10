// src/app/renminyingxiong/page.tsx
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

type FrontMatter = {
    title: string;
    description?: string;
    mainImage?: string;
    subImage1?: string;
    subImage2?: string;
    subImage3?: string;
  };

type Props = {
  pages: {
    slug: string;
    frontMatter: FrontMatter;
  }[];
};

export default function RenminYingxiongList({ pages }: Props) {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Renminyingxiong - People&apos;s Heroes</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.slug} className="mb-4">
            <Link href={`/renminyingxiong/${page.slug}`}>
              <h2 className="text-2xl font-semibold">{page.frontMatter.title}</h2>
              <p className="text-lg">{page.frontMatter.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  const contentDir =
    process.env.NODE_ENV === 'production'
      ? path.join(process.cwd(), 'content') // Absolute path for production
      : path.join('content'); // Relative path for development

  const files = fs.readdirSync(path.join(contentDir, 'renminyingxiong'));

  const pages = files.map((filename) => {
    const filePath = path.join(contentDir, 'renminyingxiong', filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.mdx', ''),
      frontMatter: data as FrontMatter,
    };
  });

  return pages.map((page) => ({
    slug: page.slug,
  }));
}
