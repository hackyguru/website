import { getSortedPostsData } from "../lib/posts.server";

const SITE_URL = "https://hackyguru.com";

function generateSiteMap(posts) {
  const staticPaths = ["", "/articles", "/talks", "/awards"];
  const urls = [
    ...staticPaths.map((path) => ({ loc: `${SITE_URL}${path}` })),
    ...posts.map((post) => ({
      loc: `${SITE_URL}/articles/${post.slug}`,
      lastmod: post.date,
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod }) =>
      `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`
  )
  .join("\n")}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  const posts = await getSortedPostsData();
  res.setHeader("Content-Type", "text/xml");
  res.write(generateSiteMap(posts));
  res.end();
  return { props: {} };
}

export default function SiteMap() {
  return null;
}
