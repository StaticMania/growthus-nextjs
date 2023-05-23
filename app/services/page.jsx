import React from "react";
import Client from "@/components/Client";
import BusinessSolution from "@/components/BusinessSolution";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import ServiceHero from "@/components/ServiceHero";
import BusinessServices from "@/components/BusinessServices";
import {ServiceHeroData, BusinessServicesData} from "@/Data/Data.js";
const page = () => {
  return (
    <>
      <ServiceHero data={ServiceHeroData} />
      <BusinessSolution />
      <BusinessServices data={BusinessServicesData} />
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
