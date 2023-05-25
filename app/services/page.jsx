import React from "react";
import Client from "@/components/Client";
import BusinessSolution from "@/components/BusinessSolution";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import ServiceHero from "@/components/ServiceHero";

import {ServiceHeroData} from "@/Data/Data.js";

import SectionHeader from "@/components/Common/SectionTitle";
import BusinessServices from "@/components/BusinessServices/BusinessServices.jsx";

import fs from "fs";
import matter from "gray-matter";
const page = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((services) => (
    <BusinessServices
      key={services.slug}
      props={services}
    />
  ));
  return (
    <>
      <ServiceHero data={ServiceHeroData} />
      {/* <BusinessServices /> */}
      <section
        className="service-item work pb-7"
        id="service-item"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <SectionHeader
                title="Business Service"
                paragraph="Discover how our services can grow your business. From digital marketing to web development and design, our team delivers tailored solutions to exceed your expectations."
              />
            </div>
          </div>
        </div>
        <div className="container">{postPreviews}</div>
      </section>

      <BusinessSolution />
      <Client border="border-top" />
      <Testimonials />
      <CallToAction
        title={
          <>
            <span>Sounds Good? </span> <br /> <span>Let’s Grow your Business.</span>
          </>
        }
        link="/"
      />
    </>
  );
};

export default page;

const getPostMetadata = () => {
  const folder = "Data/services/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Get gray-matter data from each file.
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`Data/services/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    const matterResultData = {...matterResult.data, slug: fileName.replace(".md", "")};
    return {
      ...matterResultData,
    };
  });

  return posts;
};
