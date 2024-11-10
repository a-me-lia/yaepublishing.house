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
};

export default async function HeroPage({ params }: { params: { slug: string } }) {
  const filePath = path.join('content', 'renminyingxiong', `${params.slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(fileContents);

  return (
    <MDXTemplate frontMatter={data as FrontMatter}>
      <MDXRemote source={content} />
    </MDXTemplate>
  );
}
