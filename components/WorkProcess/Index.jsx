import React from "react";
import SectionHeader from "../Common/SectionTitle";
import WorkProcessItems from "./WorkProcessItems";
import WorkProcessData from "./WorkProcessData";
function WorkProcess() {
  return (
    <section className="work">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <SectionHeader
              title="Our Work Process"
              paragraph="Our structured and transparent work process ensures high-quality work on time and within budget. Let us help you achieve your business goals."
            />
          </div>
        </div>

        {WorkProcessData.map((item) => (
          <WorkProcessItems
            data={item}
            key={item.id}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkProcess;
