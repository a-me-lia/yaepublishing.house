// src/app/renminyingxiong/[slug]/page.tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import MDXTemplate from '../../components/template';

type FrontMatter = {
  title: string;
  description?: string;
  mainImage?: string;
  subImage1?: string;
  subImage2?: string;
  subImage3?: string;
};


export default async function HeroPage({ params }: { params: { slug: string } }) {
  const contentDir =
    process.env.NODE_ENV === 'production'
      ? path.join(process.cwd(), 'content') // Absolute path for production
      : path.join('content'); // Relative path for development

  const filePath = path.join(contentDir, 'renminyingxiong', `${params.slug}.mdx`);

  // Ensure the file exists
  if (!fs.existsSync(filePath)) {
    return {
      notFound: true, // Return 404 if the file doesn't exist
    };
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return (
    <MDXTemplate frontMatter={data as FrontMatter}>
      <MDXRemote source={content} />
    </MDXTemplate>
  );
}

export async function generateStaticParams() {
  const contentDir =
    process.env.NODE_ENV === 'production'
      ? path.join(process.cwd(), 'content') // Absolute path for production
      : path.join('content'); // Relative path for development

  const files = fs.readdirSync(path.join(contentDir, 'renminyingxiong'));

  const slugs = files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));

  return slugs.map((slug) => ({ slug: slug.slug }));
}
