import React from "react";
import Hero from "@/components/Hero";
import Client from "@/components/Client";
import BusinessSolution from "@/components/BusinessSolution";
import WorkProcess from "@/components/WorkProcess";
import Community from "@/components/Community";
import Counter from "@/components/Counter";
export default function Home() {
  return (
    <>
      <Hero />
      <Client border="border-bottom" />
      <BusinessSolution />
      <WorkProcess />
      <Community />
      <Counter />
    </>
  );
}
