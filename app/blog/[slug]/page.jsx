import Link from "next/link";
import {getPostMetadata} from "../page";
import fs from "fs";
import Markdown from "react-markdown";
import matter from "gray-matter";

export const getPostContent = (slug) => {
  const folder = "Data/posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
const BlogPost = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const postParams = post.data;
  return (
    <div className="my-5 container">
      <div className="mt-5">
        <h4>{postParams.title}</h4>
        <p>{postParams.subtitle}</p>
        <Link
          className="btn btn-warning"
          href="/blog"
        >
          Read More
        </Link>
        <Markdown>{post.content}</Markdown>
      </div>
    </div>
  );
};

export default BlogPost;
