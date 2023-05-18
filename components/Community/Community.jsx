import React from "react";
import Image from "next/image";
const CommunityItems = (Community) => {
  const {title, image} = Community;
  const mapImage = {
    width: "100%",
    height: "auto",
  };
  return (
    <section className="community">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-header">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="map position-relative">
              <Image
                src={image}
                alt="map"
                width={900}
                height={550}
                style={mapImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityItems;
