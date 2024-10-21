import Image from 'next/image';
import Link from 'next/link';
import { BackgroundGradient } from './background-gradient';
import { HoverBorderGradient } from './hover-border-gradient';

const BlogCard = ({ post }) => {
  const { title, description, date, author, tags, coverImage, slug, link } = post;

  return (

    <div className="bg-black shadow-md overflow-hidden border-gray-700 border  hover:shadow-gray-900">
      <img src={coverImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-md md:text-xl text-white font-bold mb-2 h-16">{title}</h2>
        <p className="text-gray-300 text-sm md:mb-4 h-20">{description}</p>
        <div className="md:flex items-center justify-between">
          <div>
            <span className="text-gray-300 text-sm">{date} - by {author}</span>
          </div>
          <div className='mt-4 md:mt-0'>
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-gray-600 border text-gray-600 px-2 py-1 mr-2 text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <Link href={link ? link : `/blog/${slug}`}>
          <h2 className=" bg-gray-600  text-white px-4 py-2 hover:bg-white hover:text-black font-mono">
            Read More
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;