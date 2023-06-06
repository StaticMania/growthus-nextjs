"use client";
import SectionHeader from "../Common/SectionTitle";
import WorkProcessItems from "./WorkProcessItems";
function WorkProcess({ data }) {
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

        {data.map((item) => (
          <WorkProcessItems data={item} key={item.id} />
        ))}
      </div>
    </section>
  );
}

export default WorkProcess;
