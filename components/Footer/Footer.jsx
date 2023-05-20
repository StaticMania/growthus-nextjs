"use client";
import React from "react";
import {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <footer
      className="footer text-center text-md-start py-7"
      id="footer"
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 me-auto mt-4">
            <div className="footer-description text-center text-lg-start">
              <a
                href="/"
                className="mb-5"
              >
                <Image
                  src="/images/footer-logo.svg"
                  alt="logo"
                  width={130}
                  height={35}
                />
              </a>
              <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</p>
            </div>
            <div className="footer-description text-center text-lg-start pb-md-6">
              <p className="mb-3">Stay in touch</p>
              <form
                action="#"
                className="footer-submit-form"
              >
                <div className="from-group">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your email address"
                    />
                    <div className="submit">
                      <button type="submit">
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.00761904 14L16 7L0.00761904 0L0 5.44444L11.4286 7L0 8.55556L0.00761904 14Z"
                            fill="white"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2">
            <div className="footer-widget pt-3">
              <h6>Company</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="service.html"
                    className="py-2"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="career.html"
                    className="py-2"
                  >
                    Career
                  </a>
                </li>
                <li>
                  <a
                    href="blog.html"
                    className="py-2"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="contact.html"
                    className="py-2"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-widget pt-3">
              <h6>Company</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="privacy-policy.html"
                    className="py-2"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="terms-condition.html"
                    className="py-2"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="business-policy.html"
                    className="py-2"
                  >
                    Business Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-3">
            <div className="footer-widget pt-3">
              <h6>Canada</h6>
              <p>
                1901 Thornridge Cir. Shiloh, <br />
                Hawaii 81063
              </p>
            </div>
            <div className="footer-widget pt-3">
              <h6>United States</h6>
              <p>
                2118 Thornridge Cir. Syracuse,
                <br />
                Connecticut 35624
              </p>
            </div>
            <div className="footer-widget pt-3">
              <h6>Work inquiries</h6>
              <ul className="list-unstyled">
                <li>
                  <p className="mb-0">Interested in working with us?</p>
                </li>
                <li>
                  <a
                    href="mailto:info@growthus.com"
                    className="mb-4"
                  >
                    info@growthus.com
                  </a>
                </li>
                <li>
                  <a href="tel:+3.230.705.5448"> Ph: +3.230.705.5448</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-2">
            <div className="footer-widget pt-3">
              <h6>Social Media</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="py-2"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="py-2"
                  >
                    Lindedin
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-widget pt-3">
              <h6>Resources</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="contact.html"
                    className="py-2"
                  >
                    Help & Support
                  </a>
                </li>
                <li>
                  <a
                    href="project.html"
                    className="py-2"
                  >
                    Customer Case Studies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="col-md-12">
            <div className="text-center text-lg-start">
              <p className="text-secondary-light mb-0">Copyright 2023 Growthus, All rights reserved!</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
