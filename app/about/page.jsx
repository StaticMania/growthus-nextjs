import Counter from "@/components/Counter";
import CallToAction from "@/components/CallToAction";
import Client from "@/components/Client";
import BusinessSolution from "@/components/BusinessSolution/BusinessSolution";
import Community from "@/components/Community";
import AboutContent from "@/components/AboutContent";
import { JoinTeam, TeamData, AboutStory } from "@/data/Data.js";
import Team from "@/components/Team";
import CompanyAddress from "@/components/CompanyAddress";
import AboutHero from "@/components/AboutHero";

export const metadata = {
  title: "Growthus | About Us",
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
      <Team />
      <AboutContent data={JoinTeam} />
      <CompanyAddress />
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

export default page;
