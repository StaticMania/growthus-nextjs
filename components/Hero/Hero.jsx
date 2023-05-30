"use client";

import Link from "next/link";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react";
const HeroItems = (hero) => {
  const {title, description, rating, image, imageShape} = hero;
  const imageShapeStyle = {
    position: "absolute",
    top: "50%",
    width: "920px",
    left: "50%",
    opacity: "0.5",
    transform: "translate(-50%, -50%)",
    height: "auto",
  };
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };
  return (
    <section className="hero pt-9">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-xl-6">
            <div
              className="hero-content text-center text-lg-start"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-once="true"
            >
              <h1>{title}</h1>
              <p className="w-lg-75">{description}</p>
              <div className="d-lg-flex">
                <Link
                  href="/contact"
                  className="btn btn-primary me-sm-4 mb-4 mb-sm-0"
                >
                  Let’s Talk
                </Link>
                <Link
                  href="/case-study"
                  className="btn btn-outline"
                >
                  Check Our Work
                </Link>
              </div>
              <div className="review-wrapper">
                <div className="star-block-hero">
                  <Icon.Star
                    size={18}
                    weight="fill"
                  />
                </div>
                <div>
                  Rated <strong>{rating}/5</strong> from over <strong>500+</strong> reviews.
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-xl-6">
            <div
              className="hero-banner"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <div className="hero-shape-wrapper position-absolute w-100 h-100">
                <div className="hero-shape position-absolute bg-turquoise rounded-circle">
                  <Image
                    src={imageShape}
                    alt="hero images"
                    width={500}
                    height={500}
                    style={imageShapeStyle}
                  />
                </div>
              </div>
              <div className="hero-banner-image text-lg-start text-md-center text-xxl-center">
                <Image
                  src={image}
                  alt="hero images"
                  className="z-100"
                  width={473}
                  height={550}
                  style={imageStyle}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroItems;
