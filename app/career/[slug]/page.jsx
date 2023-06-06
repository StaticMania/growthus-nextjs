import Markdown from "react-markdown";
import PageHero from "@/components/Common/PageHero";
import CareerForm from "@/components/Career/CareerForm.jsx";
import getMarkDownContent from "@/utils/GetMarkDownContent";
import getMarkDownData from "@/utils/GetMarkDownData";

export const metadata = {
  title: "Growthus | Career",
};

export const generateStaticParams = async () => {
  const posts = getMarkDownData("data/career/");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const CareerSingle = (props) => {
  const folder = "data/career/";
  const slug = props.params.slug;
  const post = getMarkDownContent(folder, slug);
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
