import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getSortedPostsData } from '../../lib/posts.server';
import { Mail } from 'lucide-react';
import Scramble from '@/components/hooks/scramble';
import EndFooter from '@/components/ui/end-footer';
import Image from 'next/image';

export async function getStaticPaths() {
  const posts = await getSortedPostsData();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const posts = await getSortedPostsData();
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}

export default function BlogPostPage({ post }) {
  const { title, date, author, content, coverImage, description } = post;

  const customRenderers = {
    code({ className, children }) {
      const language = className ? className.split('-')[1] : 'text';
      return (
        <SyntaxHighlighter
          style={dracula}
          language={language}
        >
          {children}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta 
          name="description" 
          content={description} 
        />
        <meta property="og:url" content={`https://hackyguru.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://hackyguru.com${coverImage}`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="hackyguru.com" />
        <meta property="twitter:url" content={`https://hackyguru.com/blog/${post.slug}`} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://hackyguru.com${coverImage}`} />
      </Head>
      <div className="w-full bg-black">
        <div className="relative h-[400px] overflow-hidden">
          <Image
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
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent grainy" />
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
            <h1 className="text-xl font-mono flex">
              {"/"}
              <Scramble text="say hi " />
            </h1>
            <a 
              href='https://x.com/hackyguru' 
              className='bg-white text-black p-3 flex space-x-3 items-center'
            >
              <Mail className='w-5 h-5' />
              <h1>Reach out</h1>
            </a>
          </div>
        </div>
        <EndFooter />
      </div>
    </div>
  );
}