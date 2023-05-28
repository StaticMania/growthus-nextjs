"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {CaretRight} from "@phosphor-icons/react";
export const Caret = () => {
  return (
    <div className="col-md-12 text-center mt-4">
      <Link
        href="/case-study"
        className="btn btn-secondary"
      >
        <span className="position-relative">
          See More
          <CaretRight
            size={14}
            weight="thin"
          />
        </span>
      </Link>
    </div>
  );
};
export const CaseStudy = ({props}) => {
  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
    width: "auto",
  };
  return (
    <div className="col-md-4">
      <div className="project-item-wrapper">
        <Link
          href={`/case-study/${props.slug}`}
          className="project-item"
        >
          <div className="project-item-thumb">
            <Image
              src={props.thumbnail}
              alt="project-thumbnail"
              width={300}
              height={300}
              style={imageStyle}
            />
            <span>{props.tag}</span>
          </div>
          <div className="project-item-content">
            <h3>{props.title}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};
