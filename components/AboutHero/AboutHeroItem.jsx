"use client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function AboutHeroItem({ data }) {
  const { images } = data;
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="container hero-thumbnail clearfix"
        >
          {images.map((index, i) => (
            <motion.div
              transition={{
                duration: 0.4,
              }}
              className="hero-thumbnail-item"
              key={i}
            >
              <motion.img
                src={index.image}
                alt="about-images"
                width={325}
                height={370}
                variants={item}
                style={imageStyle}
              />
            </motion.div>
          ))}
        </motion.div>
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
