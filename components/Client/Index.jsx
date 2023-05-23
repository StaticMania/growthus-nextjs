import React from "react";
import SectionHeader from "../Common/SectionTitle";
import ClientImages from "./ClientImages";
import {ClientImageData} from "@/Data/Data.js";

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
                <ClientImages
                  key={item.id}
                  ClientImages={item}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Client;
