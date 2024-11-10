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

type Props = {
  frontMatter: FrontMatter;
  content: string;
};

export default async function HeroPage({ params }: { params: { slug: string } }) {
  const contentDir =
    process.env.NODE_ENV === 'production'
      ? path.join(process.cwd(), 'content') // Absolute path for production
      : path.join('content'); // Relative path for development

  const filePath = path.join(contentDir, 'renminyingxiong', `${params.slug}.mdx`);

  // Ensure the file exists
  if (!fs.existsSync(filePath)) {
    return <div>404 - Page Not Found</div>; // Display 404 message manually
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return (
    <MDXTemplate frontMatter={data as FrontMatter}>
      <MDXRemote source={content} />
    </MDXTemplate>
  );
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const contentDir =
    process.env.NODE_ENV === 'production'
      ? path.join(process.cwd(), 'content')
      : path.join('content');

  const filePath = path.join(contentDir, 'renminyingxiong', `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return {
      notFound: true,
    };
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  return {
    title: data.title,
    description: data.description || '',
  };
}
