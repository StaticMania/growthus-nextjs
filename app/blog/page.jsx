import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import {BlogTitle} from "@/Data/Data.js";
function Blog() {
  const posts = getPostMetadata();

  return (
    <div className="my-5 container">
      <h1>{BlogTitle.title}</h1>
      {posts.map((post) => (
        <div
          key={post.title}
          className="p-5 shadow-sm mb-5"
        >
          <h4>{post.title}</h4>
          <p>{post.subtitle}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="btn btn-warning"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;

export const getPostMetadata = () => {
  const folder = "Data/posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const postsData = markdownPosts.map((file) => {
    const filePath = path.join(folder, file);
    const content = fs.readFileSync(filePath, "utf8");
    const data = matter(content);
    return {
      ...data.data,
      slug: file.replace(".md", ""),
    };
  });

  return postsData;
};
