import PageHero from "@/components/Common/PageHero.jsx";
import CallToAction from "@/components/CallToAction";
import AllBlogs from "@/components/AllBlogs";
import getMarkDownData from "@/utils/GetMarkDownData";

export const metadata = {
  title: "Growthus | Blog",
};

function Blog() {
  const posts = getMarkDownData("data/posts/");

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
