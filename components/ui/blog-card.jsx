import Link from 'next/link';
import ArticleThumbnail from './article-thumbnail';
import { BackgroundGradient } from './background-gradient';
import { HoverBorderGradient } from './hover-border-gradient';

const BlogCard = ({ post }) => {
  const { title, description, date, author, tags, coverImage, slug, link } = post;

  return (

    <div className="bg-[#121212] shadow-md overflow-hidden border-white/10 border hover:shadow-zinc-900 group flex flex-col h-full min-w-0">
      <div className="w-full h-48 relative overflow-hidden shrink-0">
        <ArticleThumbnail
          src={coverImage}
          alt={title}
          seed={slug || title}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 min-w-0">
        <h2 className="text-base md:text-xl text-zinc-100 font-bold mb-2 line-clamp-2 md:min-h-[3.5rem] break-words">{title}</h2>
        <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-3 md:min-h-[4.5rem] break-words">{description}</p>
        <div className="mt-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-zinc-500 text-sm font-mono">{date} - by {author}</span>
          </div>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-white/10 border text-zinc-500 px-2 py-1 text-sm font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 pt-0">
        <Link href={link ? link : `/articles/${slug}`}>
          <h2 className=" bg-zinc-800 text-zinc-300 px-4 py-2 hover:bg-zinc-200 hover:text-black font-bold w-full text-center block">
            Read More
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;