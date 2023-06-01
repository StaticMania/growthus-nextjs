import AllBlogs from "@/components/AllBlogs/AllBlogs";
import BlogPostMetaData from "@/components/Blog/BlogPostMetaData.js";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/Common/PageHero";
export const metadata = {
  title: "Taxonomy | Tags",
};
const TaxonomySingle = ({params}) => {
  const posts = BlogPostMetaData();
  const allPostsWithTag = posts.filter((post) => post.tags.includes(params.tag));
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
            <span>Sounds Good? </span> <br /> <span>Let’s Grow your Business.</span>
          </>
        }
      />
    </>
  );
};

export default TaxonomySingle;
