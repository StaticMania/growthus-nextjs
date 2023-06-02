"use client";
import * as Icon from "@phosphor-icons/react";

import {motion} from "framer-motion";
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

  const container = {
    hidden: {opacity: 1, scale: 1},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const item1 = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const item2 = {
    hidden: {y: 70, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="hero pt-9">
      <div className="container">
        <motion.div
          className="row align-items-center"
          variants={container}
          transition={{
            duration: 0.5,
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={item1}
            transition={{
              duration: 0.4,
            }}
            className="col-lg-7 col-xl-6"
          >
            <motion.div className="hero-content text-center text-lg-start">
              <motion.h1>{title}</motion.h1>
              <motion.p className="w-lg-75">{description}</motion.p>
              <motion.div className="d-lg-flex">
                <motion.a
                  href="/contact"
                  className="btn btn-primary me-sm-4 mb-4 mb-sm-0"
                >
                  Let’s Talk
                </motion.a>
                <motion.a
                  href="/case-study"
                  className="btn btn-outline"
                >
                  Check Our Work
                </motion.a>
              </motion.div>
              <motion.div className="review-wrapper">
                <motion.div className="star-block-hero">
                  <Icon.Star
                    size={18}
                    weight="fill"
                  />
                </motion.div>
                <motion.div>
                  Rated <motion.strong>{rating}/5</motion.strong> from over <motion.strong>500+</motion.strong> reviews.
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={item2}
            transition={{
              duration: 0.4,
            }}
            className="col-lg-5 col-xl-6"
          >
            <motion.div className="hero-banner">
              <motion.div className="hero-shape-wrapper position-absolute w-100 h-100">
                <motion.div className="hero-shape position-absolute bg-turquoise rounded-circle">
                  <motion.img
                    src={imageShape}
                    alt="hero images"
                    width={500}
                    height={500}
                    style={imageShapeStyle}
                  />
                </motion.div>
              </motion.div>
              <motion.div className="hero-banner-image text-lg-start text-md-center text-xxl-center">
                <motion.img
                  src={image}
                  alt="hero images"
                  className="z-100"
                  width={473}
                  height={550}
                  style={imageStyle}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroItems;
