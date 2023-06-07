import React from "react";
import Image from "next/image";
import { imageStyle } from "@/data/data";
function CareerHeroItem({ data }) {
  return (
    <>
      <section className="hero career-hero pt-10 pt-lg-14">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto">
              <div className="hero-content text-center">
                <h1>{data.title}</h1>
                <p>{data.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="career-hero-banner pt-7">
          <Image
            src={data.image}
            alt="career-banner"
            style={imageStyle}
            className="w-100"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <section className="about-details py-7 pt-lg-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center">
                <p className="mb-6">{data.details}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CareerHeroItem;
