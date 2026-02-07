import Image from 'next/image';
import Link from 'next/link';
import { BackgroundGradient } from './background-gradient';
import { HoverBorderGradient } from './hover-border-gradient';

const BlogCard = ({ post }) => {
  const { title, description, date, author, tags, coverImage, slug, link } = post;

  return (

    <div className="bg-[#121212] shadow-md overflow-hidden border-white/10 border hover:shadow-zinc-900 group">
      <div className="w-full h-48 relative overflow-hidden">
        <img src={coverImage} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-md md:text-xl text-zinc-100 font-bold mb-2 h-16">{title}</h2>
        <p className="text-zinc-400 text-sm md:mb-4 h-20 leading-relaxed">{description}</p>
        <div className="md:flex items-center justify-between">
          <div>
            <span className="text-zinc-500 text-sm font-mono">{date} - by {author}</span>
          </div>
          <div className='mt-4 md:mt-0'>
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-white/10 border text-zinc-500 px-2 py-1 mr-2 text-sm font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <Link href={link ? link : `/blog/${slug}`}>
          <h2 className=" bg-zinc-800 text-zinc-300 px-4 py-2 hover:bg-zinc-200 hover:text-black font-bold w-full text-center block">
            Read More
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;