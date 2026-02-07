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
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      if (!inline && language) {
        return (
          <SyntaxHighlighter
            style={dracula}
            language={language}
            PreTag="div"
            {...props}
          >
            {String(children).replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      }
      
      // For inline code blocks
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }
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
      <div className="w-full bg-[#121212] min-h-screen">
        <div className="relative h-[400px] overflow-hidden">
          <Image
            alt="Cover Image"
            className="h-full w-full object-cover opacity-50"
            height="400"
            src={coverImage}
            style={{
              aspectRatio: "1200/400",
              objectFit: "cover",
            }}
            width="1200"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-8 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-4">
              <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
                {title}
              </h1>
              <div className="flex items-center gap-4 text-zinc-400 font-mono text-sm">
                 <span>{date}</span>
                 <span>/</span>
                 <span>{author}</span>
              </div>
            </div>
          </div>
        </div>
        <article className="mx-auto max-w-3xl mt-10 px-6 pb-20">
          <ReactMarkdown
            components={customRenderers}
            className="prose prose-invert prose-lg max-w-none prose-headings:text-zinc-100 prose-p:text-zinc-400 prose-li:text-zinc-400 prose-strong:text-zinc-200 prose-a:text-emerald-400 prose-code:text-emerald-300"
          >
            {content}
          </ReactMarkdown>
        </article>
        <div className="max-w-3xl mx-auto px-6 mb-20">
             <div className="border-t border-white/10 pt-10">
                <div className="flex justify-between items-center bg-white/5 p-6 rounded-lg border border-white/5">
                    <h1 className="text-xl font-mono flex text-zinc-300">
                    {"/"} <span className="ml-2"><Scramble text="say hi" /></span>
                    </h1>
                     <a 
                    href='https://x.com/hackyguru' 
                    className='text-zinc-400 hover:text-white flex space-x-2 items-center transition-colors'
                    >
                    <Mail className='w-4 h-4' />
                    <span className="font-mono text-sm">reach_out</span>
                    </a>
                </div>
             </div>
        </div>
        <EndFooter />
      </div>
    </div>
  );
}