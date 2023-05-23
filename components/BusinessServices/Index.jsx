"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../Common/SectionTitle";
import {CaretRight} from "@phosphor-icons/react";
import {BusinessServicesData} from "@/Data/Data.js";
const BusinessService = ({data}) => {
  const {image, title, paragraph, btnLink, serviceInclude} = data;

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };
  return (
    <section
      className="service-item work pb-7"
      id="service-item"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <SectionHeader
              title="Business Service"
              paragraph="Discover how our services can grow your business. From digital marketing to web development and design, our team delivers tailored solutions to exceed your expectations."
            />
          </div>
        </div>
      </div>
      <div className="container">
        {BusinessServicesData.map((index, i) => (
          <div
            className="row work-item-container align-items-center"
            key={index.id}
          >
            <div className="col-lg-6">
              <div className="work-item">
                <div className="work-item-shape-wrapper">
                  <div className="work-item-shape">
                    <Image
                      src="/images/work/work-shap.svg"
                      alt="hero images"
                      fill
                    />
                  </div>
                </div>
                <div className="work-item-wraper">
                  <div className="work-item-wraper-banner">
                    <Image
                      src={index.image}
                      alt="Business images"
                      width={540}
                      height={590}
                      style={imageStyle}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="work-item">
                <div className="work-content">
                  <h2>{index.title}</h2>
                  <p>{index.paragraph}</p>
                  <ul className="list-unstyled service-item-list">
                    {index.serviceInclude.map((item, i) => (
                      <li key={item.id}>
                        <span>{item.serviceIncludeItem}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={index.btnLink}
                    className="btn btn-secondary"
                  >
                    <span className="position-relative">
                      Learn More
                      <CaretRight
                        size={14}
                        weight="thin"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BusinessService;
