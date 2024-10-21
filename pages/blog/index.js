// pages/blog/index.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import BlogCard from '@/components/ui/blog-card';
import FilterBlogPosts from '@/components/ui/filter-blog';
import { getSortedPostsData, getAllTags } from '../../lib/posts.server';
import { Spotlight } from '@/components/ui/spotlight';
import EndFooter from '@/components/ui/end-footer';
import Scramble from '@/components/hooks/scramble';
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowRight, ChevronLeft, ChevronRight, PanelRight } from 'lucide-react';
import { Image, Shimmer } from 'react-shimmer'


const POSTS_PER_PAGE = 9;

export async function getStaticProps() {
  const allPosts = await getSortedPostsData();
  const allTags = await getAllTags();
  
  return {
    props: {
      allPostsData: allPosts, // Match the prop name with what component expects
      allTags
    }
  };
}

export default function BlogIndex({ allPostsData, allTags }) {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [activeTag, setActiveTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFilteredPosts(allPostsData);
    setLoading(false);
  }, [allPostsData]);

  const filterPosts = (tag) => {
    setLoading(true);
    if (tag === null) {
      setFilteredPosts(allPostsData);
      setActiveTag(null);
    } else {
      const filtered = allPostsData.filter((post) => post.tags.includes(tag));
      setFilteredPosts(filtered);
      setActiveTag(tag);
    }
    setCurrentPage(1);
    setLoading(false);
  };

  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Guru&apos;s Blog</title>
        <meta 
          name="description" 
          content="Discover the blog articles authored by Kumaraguru across various platforms. This includes technical deep dive ins, tutorials, workshops and more" 
        />
<meta property="og:url" content="https://hackyguru.com/blog" />
<meta property="og:type" content="website" />
<meta property="og:title" content="Guru's Blog" />
<meta property="og:description" content="Discover the blog articles authored by Kumaraguru across various platforms. This includes technical deep dive ins, tutorials, workshops and more" />
<meta property="og:image" content="https://opengraph.b-cdn.net/production/images/176bf0b0-b772-4091-a30b-e9f936c12326.png?token=fFBgyZUDL00dYgHEQ3hfdLAyJYYr7Z5p81HrxnZdFE8&height=675&width=1200&expires=33265501980" />

<meta name="twitter:card" content="summary_large_image" />
<meta property="twitter:domain" content="hackyguru.com" />
<meta property="twitter:url" content="https://hackyguru.com/blog" />
<meta name="twitter:title" content="Guru's Blog" />
<meta name="twitter:description" content="Discover the blog articles authored by Kumaraguru across various platforms. This includes technical deep dive ins, tutorials, workshops and more" />
<meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/176bf0b0-b772-4091-a30b-e9f936c12326.png?token=fFBgyZUDL00dYgHEQ3hfdLAyJYYr7Z5p81HrxnZdFE8&height=675&width=1200&expires=33265501980"></meta>
      </Head>
      <div className="flex-grow w-full grainy md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight />
        <div className='flex justify-between mt-32 px-10'>
          <div className=''>
            <h1 className="text-4xl font-mono mb-8 flex">
              {"/"}
              <Scramble text="Blog" />
            </h1>
          </div>
          <FilterBlogPosts
            tags={allTags}
            filterPosts={filterPosts}
            activeTag={activeTag}
          />
        </div>
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : (
          <div className="grid z-50 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
            {currentPosts.map((post) => (
              <BlogCard 
                className="z-20" 
                key={post.id} 
                post={post} 
                activeTag={activeTag} 
              />
            ))}
          </div>
        )}
      </div>
      <div className="bottom-0 w-full bg-black/80 backdrop-blur-sm py-4">
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`border p-2 ${
              currentPage === 1 
                ? "cursor-not-allowed opacity-50" 
                : "cursor-pointer"
            }`}
          >
            <ChevronLeft />
          </button>
          <span className="text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`border p-2 ${
              currentPage === totalPages 
                ? "cursor-not-allowed opacity-50" 
                : "cursor-pointer"
            }`}
          >
            <ChevronRight />
          </button>
        </div>
      <EndFooter />
      </div>
    </div>
  );
}