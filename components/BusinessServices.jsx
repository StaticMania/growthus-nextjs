"use client";
import Image from "next/image";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";
import { imageStyle } from "@/data/data";
const BusinessServices = ({ props }) => {
  return (
    <div className="row work-item-container align-items-center">
      <div className="col-lg-6">
        <div className="work-item">
          <div className="work-item-shape-wrapper">
            <div className="work-item-shape">
              <Image
                src="/images/work/work-shap.svg"
                alt="hero images"
                width={530}
                height={575}
                style={imageStyle}
              />
            </div>
          </div>
          <div className="work-item-wraper">
            <div className="work-item-wraper-banner">
              <Image
                src={props.image}
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
            <h2>{props.title}</h2>
            <p>{props.paragraph}</p>
            <ul className="list-unstyled service-item-list">
              {props.serviceInclude.map((item, i) => (
                <li key={item.id}>
                  <span>{item.serviceIncludeItem}</span>
                </li>
              ))}
            </ul>
            <Link
              href={`/services/${props.slug}`}
              className="btn btn-secondary"
            >
              <span className="position-relative">
                Learn More
                <CaretRight size={14} weight="thin" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessServices;
