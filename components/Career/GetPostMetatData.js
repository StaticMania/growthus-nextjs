import fs from "fs";
import matter from "gray-matter";
const getPostMetadata = () => {
  const folder = "Data/services/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`Data/services/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      ...matterResult.data,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};
export default getPostMetadata;
