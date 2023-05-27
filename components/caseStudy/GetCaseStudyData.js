import fs from "fs";
import matter from "gray-matter";

const getcaseStudyMetadata = () => {
  const folder = "Data/caseStudy/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const caseStudyPosts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`Data/caseStudy/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      ...matterResult.data,
      slug: fileName.replace(".md", ""),
    };
  });

  return caseStudyPosts;
};

export default getcaseStudyMetadata;
