// components/BlogPost.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import remark from 'remark';
import html from 'remark-html';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BlogPost = ({ post }) => {
  const [content, setContent] = useState('');
  const router = useRouter();

  useEffect(() => {
    const filePath = path.join(process.cwd(), 'blog-content', `${router.query.slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);
    remark().use(html).process(content, (err, htmlContent) => {
      if (err) throw err;
      setContent(String(htmlContent));
    });
  }, [router.query.slug]);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogPost;
