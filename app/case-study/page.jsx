"use client";
import CallToAction from "@/components/CallToAction";
import CaseStudyHero from "@/components/caseStudy/caseStudyHero.jsx";
import {CaseStudy} from "@/components/caseStudy/";
import CaseStudyData from "@/Data/caseStudy.js";

export default async function CaseStudyPage() {
  return (
    <>
      <CaseStudyHero
        pageTitle={
          <>
            <span>Let’s See </span> <br /> <span> Our Recent Work </span>
          </>
        }
      />
      <section className="project pt-lg-7 pt-4 pb-lg-7 pb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="isotop-menu button-group-home pt-2 mb-lg-6 mb-4">
                <button className="is-checked">All project</button>
                <button>Marketing</button>
                <button>Design</button>
                <button>Development</button>
              </div>
            </div>
          </div>
          <div className="row">
            {CaseStudyData.map((item, i) => (
              <CaseStudy
                key={i}
                props={item}
              />
            ))}
          </div>
        </div>
      </section>

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
}
