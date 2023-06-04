import PageHero from "@/components/Common/PageHero.jsx";
import BlogPostMetaData from "@/components/Blog/BlogPostMetaData.js";
import CallToAction from "@/components/CallToAction";
import AllBlogs from "@/components/AllBlogs/AllBlogs";

function Blog() {
  const posts = BlogPostMetaData();

  return (
    <>
      <PageHero
        pageTitle={
          <>
            <span>Blogs</span>
          </>
        }
      />
      <AllBlogs posts={posts} />
      <CallToAction
        title={
          <>
            <span>Sounds Good? </span> <br />{" "}
            <span>Let’s Grow your Business.</span>
          </>
        }
      />
    </>
  );
}

export default Blog;
