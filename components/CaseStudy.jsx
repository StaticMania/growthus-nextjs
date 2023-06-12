"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CaretRight } from "@phosphor-icons/react";
import { imageStyle } from "@/data/data";

export const Caret = () => {
  return (
    <div className="col-md-12 text-center mt-4">
      <Link href="/case-study" className="btn btn-secondary">
        <span className="position-relative">
          See More
          <CaretRight size={14} weight="thin" />
        </span>
      </Link>
    </div>
  );
};

export const CaseStudy = ({ props }) => {
  return (
    <motion.div
      layout
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 25,
      }}
      className="col-md-4"
    >
      <motion.div className="project-item-wrapper">
        <motion.a href={`/case-study/${props.slug}`} className="project-item">
          <motion.div className="project-item-thumb">
            <Image
              src={props.thumbnail}
              alt="project-thumbnail"
              width={300}
              height={300}
              style={imageStyle}
            />
            <motion.span>{props.tag}</motion.span>
          </motion.div>
          <motion.div className="project-item-content">
            <motion.h3>{props.title}</motion.h3>
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
