import fs from "fs";
import path from "path";
import matter from "gray-matter";
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
export default getPostMetadata;
