import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';

type FrontMatter = {
  title: string;
  description?: string;
};

export default function RenminYingxiongList() {
  const files = fs.readdirSync(path.join('content', 'renminyingxiong'));
  const pages = files.map((filename) => {
    const filePath = path.join('content', 'renminyingxiong', filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      slug: filename.replace('.mdx', ''),
      frontMatter: data as FrontMatter,
    };
  });

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
