import AllBlogs from "@/components/AllBlogs/AllBlogs";
import BlogPostMetaData from "@/components/Blog/BlogPostMetaData.js";
import CallToAction from "@/components/CallToAction/Index";
import PageHero from "@/components/Common/PageHero";

const taxonomySingle = ({ params }) => {
  const posts = BlogPostMetaData();
  const allPostsWithTag = posts.filter((post) =>
    post.tags.includes(params.tag)
  );
  return (
    <>
      <PageHero
        pageTitle={
          <>
            <span>{params.tag}</span>
          </>
        }
      />
      <AllBlogs posts={allPostsWithTag} />
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
};

export default taxonomySingle;
