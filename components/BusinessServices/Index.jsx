"use client";
import SectionHeader from "../Common/SectionTitle";
import BusinessServices from "./BusinessServices";
import getPostMetadata from "./getPostMetadata";
const BusinessService = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((services) => (
    <BusinessServices
      key={services.slug}
      {...services}
    />
  ));
  return (
    <section
      className="service-item work pb-7"
      id="service-item"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <SectionHeader
              title="Business Service"
              paragraph="Discover how our services can grow your business. From digital marketing to web development and design, our team delivers tailored solutions to exceed your expectations."
            />
          </div>
        </div>
      </div>
      <div className="container">{postPreviews}</div>
    </section>
  );
};

export default BusinessService;
