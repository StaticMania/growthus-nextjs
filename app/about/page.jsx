"use client";
import Counter from "@/components/Counter";
import CallToAction from "@/components/CallToAction";
import Client from "@/components/Client";
import BusinessSolution from "@/components/BusinessSolution/BusinessSolution";
import Community from "@/components/Community";
import AboutContent from "@/components/AboutContent";
import {
  joinTeam,
  teamData,
  aboutStory,
  aboutHeroData,
  footerDatas,
} from "@/data/data.js";
import Team from "@/components/Team";
import CompanyAddress from "@/components/CompanyAddress";
import AboutHero from "@/components/AboutHero";
import useTitle from "@/hooks/useTitle";

const AboutUs = () => {
  useTitle("Growthus | About Us");
  return (
    <>
      <AboutHero data={aboutHeroData} />
      <Counter />
      <AboutContent data={aboutStory} />
      <BusinessSolution />
      <Community />
      <Client />
      <Team data={teamData} />
      <AboutContent data={joinTeam} />
      <CompanyAddress data={footerDatas} />
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

export default AboutUs;
