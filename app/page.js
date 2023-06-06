import React from "react";
import Hero from "@/components/Hero";
import Client from "@/components/Client";
import BusinessSolution from "@/components/BusinessSolution/BusinessSolution";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
import Community from "@/components/Community";
import Counter from "@/components/Counter";
import Testimonials from "@/components/Testimonials/Testimonial";
import CallToAction from "@/components/CallToAction";

export const metadata = {
  title: "Growthus | Home",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Client border="border-bottom" />
      <BusinessSolution />
      <WorkProcess />
      <Community />
      <Counter />
      <Testimonials />
      <CallToAction
        title={
          <>
            <span>Sounds Good? </span> <br />{" "}
            <span>Let’s Grow your Business.</span>
          </>
        }
        link="/"
      />
    </>
  );
}
