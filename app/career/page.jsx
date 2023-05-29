import React from "react";
import CareerHero from "@/components/career";
import Counter from "@/components/Counter";

import Client from "@/components/Client";
import {TeamData} from "@/Data/Data.js";
import Team from "@/components/Team";
import CompanyAddress from "@/components/CompanyAddress";
import CallToAction from "@/components/CallToAction";
const Career = () => {
  return (
    <>
      <CareerHero />
      <Counter />
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
