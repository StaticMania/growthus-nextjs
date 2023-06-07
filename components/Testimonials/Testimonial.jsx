"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialData } from "@/data/data.js";
import TestimonialItems from "./TestimonialItems";
import { CaretRight, CaretLeft } from "@phosphor-icons/react";
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <CaretRight size={16} weight="thin" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <CaretLeft size={16} weight="thin" />
    </div>
  );
}
const Testimonial = () => {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: false,
    speed: 500,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow className="next" />,
    prevArrow: <SamplePrevArrow className="previous" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          infinite: false,
        },
      },
    ],
  };
  return (
    <section className="testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 ms-auto">
            <h2>Testimonials</h2>
            <div className="slider-wrapper">
              <Slider
                {...settings}
                className="testimonials-slider position-relative"
              >
                {TestimonialData.map((item) => (
                  <TestimonialItems key={item.id} data={item} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
