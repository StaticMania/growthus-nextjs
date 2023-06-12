import Team from "@/components/Team";
import Client from "@/components/Client";
import Counter from "@/components/Counter";
import getMarkDownData from "@/utils/GetMarkDownData";
import CareerList from "@/components/Career/CareerList";
import CompanyAddress from "@/components/CompanyAddress";
import CareerHero from "@/components/Career/CareerHero";
import CallToAction from "@/components/CallToAction";
import { FooterDatas, TeamData } from "@/data/data";

export const metadata = {
  title: "Growthus | Career",
};

const Career = () => {
  const postMetadata = getMarkDownData("data/career/");
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
                  <CareerList key={i} props={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Client border="border-bottom" />
      <Team data={TeamData} />
      <CompanyAddress data={FooterDatas} />
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

export default Career;
