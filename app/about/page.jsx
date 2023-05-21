import React from "react";
import Counter from "@/components/Counter";
import AboutHero from "@/components/AboutHero";
import CallToAction from "@/components/CallToAction";
import Client from "@/components/Client";
import BusinessSolution from "@/components/BusinessSolution";
import Community from "@/components/Community";
import AboutContent from "@/components/AboutSection";
const page = () => {
  return (
    <>
      <AboutHero />
      <Counter />
      <AboutContent />
      <BusinessSolution />
      <Community />
      <Client />
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
