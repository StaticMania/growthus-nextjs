"use client";
import SectionHeader from "./Common/SectionTitle";
import { ClientImageData } from "@/data/data.js";
import Image from "next/image";

const Client = (props) => {
  return (
    <section className={`client ${props.border}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <SectionHeader
              title="Trusted by Top Brands"
              paragraph="We're proud to have worked with some of the biggest names in the industry"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="client-item-wrapper d-flex justify-content-between align-items-center text-center">
              {ClientImageData.map((item) => (
                <div className="client-item" key={item.id}>
                  <Image
                    src={item.images}
                    alt="Client images"
                    width={120}
                    height={50}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Client;
