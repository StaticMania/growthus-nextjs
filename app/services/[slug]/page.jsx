import fs from "fs";
import Markdown from "react-markdown";
import matter from "gray-matter";

const getPostMetadata = () => {
  const folder = "Data/services/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`Data/services/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    const matterResultData = {...matterResult.data, slug: fileName.replace(".md", "")};
    return {
      ...matterResultData,
    };
  });

  return posts;
};

const getPostContent = (slug) => {
  const folder = "Data/services/";
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

const PostPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{post.data.title}</h1>
        <p className="text-slate-400 mt-2">{post.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
