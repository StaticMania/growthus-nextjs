"use client";
import Image from "next/image";
import SectionHeader from "./Common/SectionTitle";
import { imageStyle } from "@/data/data";

function Team({ data }) {
  const { Leads, Members } = data;
  return (
    <section className="team">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <SectionHeader
              title="Our Leadership"
              paragraph="Our team is made up of experienced and passionate professionals who are dedicated to delivering results for our clients. We pride ourselves on our collaborative approach and our commitment to excellence"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="team-wrapper d-grid grid-template-3">
              {Leads.map((index) => (
                <div className="team-member" key={index.id}>
                  <Image
                    src={index.image}
                    alt="team-member-thumb"
                    className="team-member-thumb"
                    width={400}
                    height={400}
                    style={imageStyle}
                  />
                  <div className="team-member-details">
                    <h3>{index.name}</h3>
                    <p>{index.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-9">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <SectionHeader title="Team Members" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="team-wrapper d-grid grid-template-3">
              {Members.map((index) => (
                <div className="team-member" key={index.id}>
                  <Image
                    src={index.image}
                    alt="team-member-thumb"
                    className="team-member-thumb"
                    width={400}
                    height={400}
                    style={imageStyle}
                  />
                  <div className="team-member-details">
                    <h3>{index.name}</h3>
                    <p>{index.designation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
