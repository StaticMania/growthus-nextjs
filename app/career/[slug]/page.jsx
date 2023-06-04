import fs from "fs";
import Markdown from "react-markdown";
import matter from "gray-matter";
import PageHero from "@/components/Common/PageHero";
import GetPostMetadata from "@/components/Career/GetPostMetaData.js";
import CareerForm from "@/components/Career/CareerForm.jsx";

export const getPostContent = (slug) => {
  const folder = "Data/career/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
export const generateStaticParams = async () => {
  const posts = GetPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const CareerSingle = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const postParams = post.data;
  return (
    <>
      <PageHero
        pageTitle={postParams.title}
        breadcrumbTitle={postParams.title}
      />

      <section className="career-details py-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="career-details-content">
                <Markdown>{post.content}</Markdown>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CareerForm />
    </>
  );
};

export default CareerSingle;
