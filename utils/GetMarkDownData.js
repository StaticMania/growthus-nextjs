import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getMarkDownData = (folder) => {
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const postsData = markdownPosts.map((file) => {
    const filePath = path.join(folder, file);
    const content = fs.readFileSync(filePath, "utf8");
    const data = matter(content);
    return {
      ...data.data,
      slug: file.replace(".md", ""),
      content: data.content,
      category: data.data.category,
    };
  });

  return postsData;
};

export default getMarkDownData;
