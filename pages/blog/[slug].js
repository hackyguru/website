import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getSortedPostsData } from '../../lib/getPosts';
import Head from 'next/head';

import Scramble from '@/components/hooks/scramble';
import { Mail } from 'lucide-react';
import EndFooter from '@/components/ui/end-footer';

export async function getStaticPaths() {
  const paths = getSortedPostsData().map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), 'blog-content');
  const fullPath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    props: {
      post: {
        ...data,
        content,
      },
    },
  };
}

export default function BlogPostPage({ post }) {
  const { title, date, author, tags, content, coverImage } = post;

  const customRenderers = {
    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return (
        <SyntaxHighlighter
          style={dracula}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="w-full">
        <div className="relative h-[400px] overflow-hidden">
          <img
            alt="Cover Image"
            className="h-full w-full object-cover"
            height="400"
            src={coverImage}
            style={{
              aspectRatio: "1200/400",
              objectFit: "cover",
            }}
            width="1200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-8 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-2">
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                {title}
              </h1>
              <p className="text-gray-300">By {author} • Published on {date}</p>
            </div>
          </div>
        </div>
        <article className="mx-auto max-w-6xl mt-10 p-7">
          <ReactMarkdown
            components={customRenderers}
            className="prose prose-lg max-w-none"
          >
            {content}
          </ReactMarkdown>
        </article>
        <div className='p-10'>
          <div className='border p-5 flex justify-between items-center'>
          <h1
  className="text-xl font-mono flex">{"/"}
  <Scramble  text="say hi " /></h1>
  <a href='https://x.com/hackyguru' className='bg-white text-black p-3 flex space-x-3 items-center'>
    <Mail className='w-5 h-5' />
   <h1>Reach out</h1> </a>
          </div>
        </div>
        <EndFooter />
      </div>
    </>
  );
}