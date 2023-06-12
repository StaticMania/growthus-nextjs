"use client";
import Image from "next/image";
import { imageStyle } from "@/data/data";

const ServiceHero = () => {
  return (
    <section className="service-hero pt-9">
      <div className="container">
        <div className="row work-item-container align-items-center pb-7">
          <div className="col-lg-6">
            <div className="work-item">
              <div className="work-item-shape-wrapper">
                <div className="work-item-shape bg-primary-light">
                  <Image
                    src="/images/work/work-shap.svg"
                    alt="About Story images"
                    width={500}
                    height={500}
                    style={imageStyle}
                  />
                </div>
              </div>
              <div className="work-item-wraper">
                <div className="work-item-wraper-banner">
                  <Image
                    src="/images/service/service-header-banner.png"
                    alt="About Story images"
                    width={500}
                    height={500}
                    style={imageStyle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="work-item">
              <div className="work-content service-hero-content">
                <h1 className="service-title">
                  Services We provide for your Bussiness
                </h1>
                <p>
                  Discover how our services can grow your business. From digital
                  marketing to web development and design, our team delivers
                  tailored solutions to exceed your expectations.
                </p>

                <a href="#service-item" className="service-topTobottom">
                  <svg
                    width="45"
                    height="63"
                    viewBox="0 0 45 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.4375 1.87695L22.4375 55.5361"
                      stroke="#173641"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.81641 42.9922L22.4371 55.5359L35.0579 42.9922"
                      stroke="#173641"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
