"use client";

import Image from "next/image";
import Link from "next/link";
import Client from "@/components/Client";
import Testimonials from "@/components/Testimonials/Testimonial";
import CallToAction from "@/components/CallToAction";
import SectionHeader from "@/components/Common/SectionTitle";
import { CaseStudy, Caret } from "@/components/CaseStudy";
import { caseStudyData, servicesData } from "@/data/data.js";
import { imageStyle } from "@/data/data";
import useTitle from "@/hooks/useTitle";

const PostPage = (props) => {
  useTitle("Growthus | Services");
  const slug = props.params.slug;
  const data = servicesData.find((post) => post.slug === slug);
  return (
    <>
      <section className="service-hero services-desc-hero pt-8">
        <div className="container">
          <div className="row work-item-container align-items-center">
            <div className="col-lg-6">
              <div className="work-item">
                <div className="work-item-shape-wrapper">
                  <div className="work-item-shape bg-primary-light">
                    <Image
                      src="/images/work/work-shap.svg"
                      alt="hero images"
                      width={500}
                      height={500}
                      style={imageStyle}
                    />
                  </div>
                </div>
                <div className="work-item-wraper">
                  <div className="work-item-wraper-banner">
                    <Image
                      src={data.image}
                      alt="work images"
                      width={500}
                      height={500}
                      style={imageStyle}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-item">
                <div className="work-content service-hero-content">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link href="/">Home</Link>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {data.title}
                      </li>
                    </ol>
                  </nav>
                  <h1 className="service-type">{data.title}</h1>
                  <p>{data.serviceDetails}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="services-desc py-8">
        <div className="container">
          <div className="section-header text-start">
            <div className="row">
              <div className="col-lg-7">
                <h2>{data.serviceInfoTitle}</h2>
              </div>
              <div className="col-lg-5">
                <p>{data.serviceInfoDesc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {data.serviceInfoItems.map((items, i) => (
              <div
                className={`col-xl-4 col-md-6 ${
                  i === 1 || i === 3 ? "offset-xl-2" : ""
                }`}
                key={i}
              >
                <div className="services-desc-wrapper">
                  <div className="services-desc-header">
                    <div className="services-desc-header-icon">
                      <Image
                        src={items.icon}
                        alt="icon"
                        width={35}
                        height={35}
                      />
                    </div>
                    <h4>{items.title}</h4>
                  </div>
                  <div className="services-desc-body">
                    <p>{items.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="project project-white pt-7 pb-9">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <SectionHeader
                title="Feature Work & Case Study"
                paragraph="Explore our portfolio of successful projects and case studies to see how we've helped businesses like yours achieve their goals. Our work speaks for itself, and we're proud to showcase our expertise and achievements"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {caseStudyData.slice(0, 6).map((caseStudy, i) => (
              <CaseStudy key={i} props={caseStudy} />
            ))}
            <Caret />
          </div>
        </div>
      </section>
      <Client border="border-top" />
      <Testimonials />
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

export default PostPage;
