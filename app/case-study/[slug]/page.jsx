import fs from "fs";
import Markdown from "react-markdown";
import matter from "gray-matter";
import Image from "next/image";
import CaseStudyHero from "@/components/caseStudy/caseStudyHero.jsx";
import GetcaseStudyMetadata from "@/components/caseStudy/GetCaseStudyData.js";
export const getPostContent = (slug) => {
  const folder = "Data/caseStudy/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};
export const generateStaticParams = async () => {
  const posts = GetcaseStudyMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};
const BlogPost = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  const postParams = post.data;
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    width: "auto",
  };
  return (
    <>
      <CaseStudyHero
        pageTitle={postParams.title}
        breadcrumbTitle={postParams.title}
      />

      <section className="project-desc py-8 py-lg-8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="project-feature-photo">
                <Image
                  src={postParams.featureImage}
                  alt="Feature Image"
                  width={1000}
                  height={1000}
                  style={imageStyle}
                  className="w-100"
                />
              </div>
            </div>
          </div>
          <div className="section-header text-start">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <h2>Brand Overview</h2>
              </div>
              <div className="col-md-5">
                <p>{postParams.brandOverview}</p>
              </div>
            </div>
          </div>
          <div className="section-header text-start">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <h2>Services</h2>
              </div>
              <div className="col-md-5">
                <ul className="list-unstyled service-item-list">
                  {postParams.services.map((item, i) => (
                    <li key={i}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row gy-4 mb-5">
            {postParams.subFeatureImage.slice(0, 2).map((item, i) => (
              <div
                className="col-md-6"
                key={i}
              >
                <div className="project-subfeature-photo">
                  <Image
                    src={item.image}
                    alt="Sub Feature Image"
                    width={500}
                    height={500}
                    style={imageStyle}
                    className="w-100"
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-header text-start">
                <h2 className="mb-4">Visual identity</h2>
                <p className="mb-5">{postParams.visualIdentity}</p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mb-5">
            {postParams.subFeatureImage.slice(2, 6).map((item, i) => (
              <div
                className="col-md-6"
                key={i}
              >
                <div className="project-subfeature-photo">
                  <Image
                    src={item.image}
                    alt="Sub Feature Image"
                    width={500}
                    height={500}
                    style={imageStyle}
                    className="w-100"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="section-header text-start">
                <h2 className="mb-4">The result</h2>
                <p className="mb-5">{postParams.finalResult}</p>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="container">
              <div className="col-lg-10 mx-auto">
                {postParams.author.map((item, i) => (
                  <blockquote key={i}>
                    <div className="comment">{item.quote}</div>
                    <div className="comment-author d-flex align-items-center mt-4">
                      <div className="comment-author-thumb rounded-circle flex-shrink-0 me-3">
                        <Image
                          src={item.image}
                          alt="Profile Pictures"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="comment-author-desc flex-grow-1">
                        <h5>{item.name}</h5>
                        <p>{item.designation}</p>
                      </div>
                    </div>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-header text-start">
                <h2 className="mb-4">
                  Those who have worked <br />
                  in this project
                </h2>
                <p className="mb-5">{postParams.workDesription}</p>
              </div>
            </div>
            <div className="col-md-5">
              <h4 className="mb-4">Project Management</h4>
              <ul className="list-unstyled service-item-list">
                {postParams.managementTeam.map((item, i) => (
                  <li key={i}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-5">
              <h4 className="mb-4">Design & Development</h4>
              <ul className="list-unstyled service-item-list">
                {postParams.developmentTeam.map((item, i) => (
                  <li key={i}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
