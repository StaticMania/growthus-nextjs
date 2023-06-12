"use client";
import Image from "next/image";
import PageHero from "@/components/Common/PageHero.jsx";
import { caseStudyData } from "@/data/data.js";
import Link from "next/link";
import { imageStyle } from "@/data/data";
import useTitle from "@/hooks/useTitle";

const CaseStudyPost = (props) => {
  useTitle("Grouwthus | Case Study");
  const slug = props.params.slug;
  const data = caseStudyData.find((post) => post.slug === slug);
  const relatedPost = caseStudyData.filter((post) =>
    post.category.includes(...data.category)
  );

  return (
    <>
      <PageHero pageTitle={data.title} breadcrumbTitle={data.title} />

      <section className="project-desc py-8 py-lg-8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="project-feature-photo">
                <Image
                  src={data.featureImage}
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
                <p>{data.brandOverview}</p>
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
                  {data.services.map((item, i) => (
                    <li key={i}>
                      <span>{item.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row gy-4 mb-5">
            {data.subFeatureImage.slice(0, 2).map((item, i) => (
              <div className="col-md-6" key={i}>
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
                <p className="mb-5">{data.visualIdentity}</p>
              </div>
            </div>
          </div>

          <div className="row gy-4 mb-5">
            {data.subFeatureImage.slice(2, 6).map((item, i) => (
              <div className="col-md-6" key={i}>
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
                <p className="mb-5">{data.finalResult}</p>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="container">
              <div className="col-lg-10 mx-auto">
                {data.author.map((item, i) => (
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
                <p className="mb-5">{data.workDesription}</p>
              </div>
            </div>
            <div className="col-md-5">
              <h4 className="mb-4">Project Management</h4>
              <ul className="list-unstyled service-item-list">
                {data.managementTeam.map((item, i) => (
                  <li key={i}>
                    <span>{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-md-5">
              <h4 className="mb-4">Design & Development</h4>
              <ul className="list-unstyled service-item-list">
                {data.developmentTeam.map((item, i) => (
                  <li key={i}>
                    <span>{item.item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="project py-7">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-10">
              <div className="section-header text-start">
                <h2>What Next?</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {relatedPost
              .filter((post) => post.slug !== data.slug)
              .slice(0, 2)
              .map((item) => (
                <div className="col-md-5" key={item.id}>
                  <div className="project-item-wrapper">
                    <Link
                      href={`/case-study/${item.slug}`}
                      className="project-item"
                    >
                      <div className="project-item">
                        <div className="project-item-thumb">
                          <Image
                            src={item.thumbnail}
                            alt="feature-image"
                            height={550}
                            width={530}
                          />
                          <span>{item.tag}</span>
                        </div>
                        <div className="project-item-content">
                          <h3>{item.title}</h3>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyPost;
