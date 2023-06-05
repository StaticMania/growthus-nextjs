import AllBlogs from "@/components/AllBlogs";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/Common/PageHero";
import getMarkDownData from "@/utils/GetMarkDownData";

const TaxonomySingle = ({ params }) => {
  const posts = getMarkDownData("Data/posts/");
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

export default TaxonomySingle;
