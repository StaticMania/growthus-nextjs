"use client";
import Hero from "@/components/Hero";
import Client from "@/components/Client";
import BusinessSolution from "@/components/BusinessSolution/BusinessSolution";
import WorkProcess from "@/components/WorkProcess/WorkProcess";
import Community from "@/components/Community";
import Counter from "@/components/Counter";
import Testimonials from "@/components/Testimonials/Testimonial";
import CallToAction from "@/components/CallToAction";

import { useEffect } from "react";
import { WorkProcessData } from "../data/data.js";

export default function Home() {
  useEffect(() => {
    document.title = "Growthus | Home";
  }, []);

  return (
    <>
      <Hero />
      <Client border="border-bottom" />
      <BusinessSolution />
      <WorkProcess data={WorkProcessData} />
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
