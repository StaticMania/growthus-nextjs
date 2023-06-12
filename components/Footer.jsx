"use client";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FooterDatas } from "@/data/data.js";
const FooterData = ({ FooterContent }) => {
  const { companyLinks, policyLinks, locations, socialLinks, resources } =
    FooterContent;
  return (
    <>
      <footer className="footer text-center text-md-start py-7" id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3 me-auto mt-4">
              <div className="footer-description text-center text-lg-start">
                <a href="/" className="mb-5">
                  <Image
                    src={FooterContent.logo}
                    alt="logo"
                    width={130}
                    height={35}
                  />
                </a>
                <p>{FooterContent.footerText}</p>
              </div>
              <div className="footer-description text-center text-lg-start pb-md-6">
                <p className="mb-3">Stay in touch</p>
                <form className="footer-submit-form">
                  <div className="from-group">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email address"
                        name="email"
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
                <h6>Quick Links</h6>
                <ul className="list-unstyled">
                  {companyLinks.map((item, i) => (
                    <li key={i}>
                      <Link href={`${item.link}`} className="py-2">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-widget pt-3">
                <h6>Policies</h6>
                <ul className="list-unstyled">
                  {policyLinks.map((item) => (
                    <li key={item.id}>
                      <Link href={`${item.link}`} className="py-2">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-3">
              {locations.map((item) => (
                <div className="footer-widget pt-3" key={item.id}>
                  <h6>{item.name}</h6>
                  <p>{item.address}</p>
                </div>
              ))}

              <div className="footer-widget pt-3">
                <h6>Work inquiries</h6>
                <ul className="list-unstyled">
                  <li>
                    <p className="mb-0">Interested in working with us?</p>
                  </li>
                  <li>
                    <Link
                      href={`mailto:${FooterContent.email}`}
                      className="mb-4"
                    >
                      {FooterContent.email}
                    </Link>
                  </li>
                  <li>
                    <Link href={`tel:${FooterContent.phone}`}>
                      {" "}
                      Ph: {FooterContent.phone}{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-4 col-lg-2">
              <div className="footer-widget pt-3">
                <h6>Social Media</h6>
                <ul className="list-unstyled">
                  {socialLinks.map((item) => (
                    <li key={item.id}>
                      <Link href={`${item.link}`} className="py-2">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-widget pt-3">
                <h6>Resources</h6>
                <ul className="list-unstyled">
                  {resources.map((item) => (
                    <li key={item.id}>
                      <Link href={`${item.link}`} className="py-2">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="row clearfix">
            <div className="col-md-12">
              <div className="text-center text-lg-start">
                <p className="text-secondary-light mb-0">
                  {FooterContent.copyright}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

const Footer = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <FooterData FooterContent={FooterDatas} />;
};
export default Footer;
