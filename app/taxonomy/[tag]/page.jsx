import AllBlogs from "@/components/AllBlogs";
import CallToAction from "@/components/CallToAction";
import PageHero from "@/components/Common/PageHero";
import getMarkDownData from "@/utils/GetMarkDownData";

export const metadata = {
  title: "Growthus | Taxonomy",
};

export const generateStaticParams = async () => {
  const posts = getMarkDownData("data/posts/");
  const categories = posts.map((post) => post.category);
  const uniqueCategories = [...new Set(categories)];
  return uniqueCategories.map((item) => ({
    tag: item,
  }));
};

const TaxonomySingle = ({ params }) => {
  const posts = getMarkDownData("data/posts/");
  const tagData = posts.filter((post) => post.tags.includes(params.tag));

  return (
    <>
      <PageHero
        pageTitle={
          <>
            <span>{params.tag}</span>
          </>
        }
      />
      <AllBlogs posts={tagData} />
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
