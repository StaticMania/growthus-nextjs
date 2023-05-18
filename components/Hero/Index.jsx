import React from "react";
import HeroItems from "./Hero";

const Hero = () => {
  return (
    <HeroItems
      title="We Build Relationships that Drive Growth"
      description="At our agency, we believe in building strong relationships with our clients. Understanding your business goals, we can help you achieve success."
      imageShape="/images/hero/hero-shap.svg"
      image="/images/hero/hero-image.png"
      rating="4.8"
    />
  );
};

export default Hero;
