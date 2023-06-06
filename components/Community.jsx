"use client";
import Image from "next/image";
const Community = () => {
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
              <h2>Connect with creators worldwide.</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="map position-relative">
              <Image
                src={`/images/testimonial/map.svg`}
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

export default Community;
