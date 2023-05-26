import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "react-markdown";

const getSinglePostMetadata = (fileName) => {
  const folder = "Data/blog-posts/";
  const files = fs.readdirSync(folder);
  const markdownPost = files.find((file) => file === fileName + ".md");
  const filePath = path.join(folder, markdownPost);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContent);
  return {
    data,
    content,
  };
};

const BlogPost = ({ params }) => {
  const post = getSinglePostMetadata(params.slug);
  return (
    <div className="my-5 container">
      <div className="mt-5">
        <h4>{post.data.title}</h4>
        <p>{post.data.subtitle}</p>
        <Link className="btn btn-warning" href="/blog">
          Go Back
        </Link>
      </div>

      <Markdown className="my-5">{post.content}</Markdown>
    </div>
  );
};

export default BlogPost;
