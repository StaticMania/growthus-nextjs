"use client";
import { imageStyle } from "@/data/data";
import Image from "next/image";
import Link from "next/link";

const AboutContent = ({ data }) => {
  const { videoLink, title, paragraph, imageShape, image } = data;
  return (
    <section className="work about-story bg-gray-light py-7">
      <div className="container">
        <div className="row work-item-container align-items-center pb-7">
          <div className="col-lg-6">
            <div className="work-item">
              <div className="work-item-shape-wrapper">
                <div
                  className={`work-item-shape ${
                    videoLink ? "bg-primary-light" : "bg-light-dark"
                  }`}
                >
                  <Image
                    src={imageShape}
                    alt="About Story images"
                    width={500}
                    height={500}
                    style={imageStyle}
                  />
                </div>
              </div>
              <div className="work-item-wraper">
                <div className="work-item-wraper-banner">
                  <Image
                    src={image}
                    alt="About Story images"
                    width={500}
                    height={500}
                    style={imageStyle}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="work-item">
              <div className="work-content">
                <h2>{title}</h2>
                <p>{paragraph}</p>
                {data?.videoLink ? (
                  <a
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    href={data?.videoLink}
                    role="button"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                      />
                      <path
                        d="M15 12L10.5 9V15L15 12Z"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Watch the Video
                  </a>
                ) : (
                  <Link href={data?.btnLinK} className="btn btn-secondary">
                    Join Now
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
