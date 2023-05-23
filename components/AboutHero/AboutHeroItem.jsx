import React from "react";
import Image from "next/image";
function AboutHeroItem({data}) {
  const {images} = data;
  const imageStyle = {
    width: "auto",
    maxWidth: "100%",
    height: "auto",
  };
  return (
    <>
      <section className="hero about-hero pt-14">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="hero-content text-center">
                <h1>{data.title}</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container hero-thumbnail clearfix">
          {images.map((index, i) => (
            <div
              className="hero-thumbnail-item"
              key={i}
            >
              <Image
                src={index.image}
                alt="about-images"
                width={325}
                height={370}
                style={imageStyle}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="about-details py-7 pt-lg-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="text-center">
                <p className="mb-6">{data.paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHeroItem;
