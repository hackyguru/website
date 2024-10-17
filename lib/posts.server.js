import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'blog-content');

export async function getSortedPostsData() {
  try {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id,
        slug: id,
        ...matterResult.data,
        content: matterResult.content,
      };
    });

    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getAllTags() {
  const allPostsData = await getSortedPostsData();
  const allTags = new Set();

  allPostsData.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((tag) => {
        allTags.add(tag);
      });
    }
  });

  return Array.from(allTags);
}