// import fs from "fs";
// import matter from "gray-matter";
// import {blog} from "@/Data/Data.js";
// // posts will be populated at build time by getStaticProps()
// function Blog({posts}) {
//   const postMetadata = getPostMetadata();
//   console.log(postMetadata);
//   return (
//     <ul>
//       <h1>{blog.title}</h1>
//       <p>{blog.desc}</p>
//       {postMetadata.map((services, i) => (
//         <div key={i}>
//           <h1>{services.title}</h1>
//           <p>{services.desc}</p>
//         </div>
//       ))}
//     </ul>
//   );
// }

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export default Blog;

// const getPostMetadata = () => {
//   const folder = "Data/posts/";
//   const files = fs.readdirSync(folder);
//   const markdownPosts = files.filter((file) => file.endsWith(".md"));

//   // Get gray-matter data from each file.
//   const posts = markdownPosts.map((fileName) => {
//     const fileContents = fs.readFileSync(`Data/services/${fileName}`, "utf8");
//     const matterResult = matter(fileContents);
//     const matterResultData = {...matterResult.data, slug: fileName.replace(".md", "")};
//     return {
//       ...matterResultData,
//     };
//   });

//   return posts;
// };
import grayMatter from "gray-matter";
import fs from "fs";
import {blog} from "@/Data/Data.js";

export default function BlogPage({blogPage}) {
  return (
    <main>
      <section className="site-blog-header">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1>{blog.title}</h1>
              <p>{blog.desc}</p>
            </div>
            {blogPage.slug}
            {blogPage.map((services, i) => (
              <div key={i}>
                <h1>{services.title}</h1>
                <p>{services.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
export const getStaticProps = () => {
  const blogDirectory = path.join(process.cwd(), "Data/posts");
  const blogFiles = fs.readdir(blogDirectory);
  let blogData = Promise.all(
    blogFiles.map(async (filename) => {
      let filepath = path.join(blogDirectory, filename);
      let datafrontmatter = fs.readFile(filepath, "utf8");
      let data = grayMatter(datafrontmatter);
      data = {...data.data, slug: filename.replace(".md", "")};
      return {
        ...data,
      };
    })
  );

  return {
    props: {
      blogPage: blogData,
    },
  };
};
