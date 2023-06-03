import React from "react";
import CareerHero from "@/components/career";
import Counter from "@/components/Counter";

import Client from "@/components/Client";
import {TeamData} from "@/Data/Data.js";
import Team from "@/components/Team";
import CompanyAddress from "@/components/CompanyAddress";
import CallToAction from "@/components/CallToAction";
import GetPostMetadata from "@/components/Career/GetPostMetaData.js";
import CareerList from "@/components/Career/CareerList";
export const metadata = {
  title: "Grouwthus | Career",
};
const Career = () => {
  const postMetadata = GetPostMetadata();
  return (
    <>
      <CareerHero />
      <Counter />
      <section className="career bg-gray-light pt-9 pb-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="section-header">
                <h2>Current Job Openings</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 mx-auto">
              <div className="career-item-wrapper">
                {postMetadata.map((item, i) => (
                  <CareerList
                    key={i}
                    props={item}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Client border="border-bottom" />
      <Team data={TeamData} />
      <CompanyAddress />
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

export default Career;
