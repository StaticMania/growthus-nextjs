import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";

function Blog() {
  const posts = getPostsMetadata();
  return (
    <div className="my-5 container">
      {posts.map((post) => (
        <div key={post.data.id} className="p-5 shadow-sm mb-5">
          <h4>{post.data.title}</h4>
          <p>{post.data.subtitle}</p>
          <Link href={`/blog/${post.slug}`} className="btn btn-warning">
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Blog;

export const getPostsMetadata = () => {
  const folder = "Data/blog-posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const postsData = markdownPosts.map((file) => {
    const filePath = path.join(folder, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    return { slug: file.replace(".md", ""), data, content };
  });

  return postsData;
};
