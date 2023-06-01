import React from "react";
import Counter from "@/components/Counter";
import AboutHero from "@/components/AboutHero";
import CallToAction from "@/components/CallToAction";
import Client from "@/components/Client";
import BusinessSolution from "@/components/BusinessSolution";
import Community from "@/components/Community";
import AboutContent from "@/components/AboutSection";
import {AboutStory, JoinTeam, TeamData} from "@/Data/Data.js";
import Team from "@/components/Team";
import CompanyAddress from "@/components/CompanyAddress";
export const metadata = {
  title: "Grouwthus | About Us",
};
const page = () => {
  return (
    <>
      <AboutHero />
      <Counter />
      <AboutContent data={AboutStory} />
      <BusinessSolution />
      <Community />
      <Client />
      <Team data={TeamData} />
      <AboutContent data={JoinTeam} />
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

export default page;
