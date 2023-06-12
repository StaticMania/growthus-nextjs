"use client";

import SectionHeader from "../Common/SectionTitle";
import BusinessSolutionItems from "./BusinessSolutionItems";
import { BusinessSolutionData } from "@/data/data.js";
function BusinessSolution() {
  return (
    <section className="services py-7 py-md-9">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <SectionHeader
              title="Solution for your Business"
              paragraph="Customized approaches to fit your unique business needs and goals."
            />
          </div>
        </div>
        <div className="row">
          {BusinessSolutionData.map((item) => (
            <BusinessSolutionItems key={item.id} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BusinessSolution;
