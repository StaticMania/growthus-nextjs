import React from "react";
import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
  const imageStyle = {
    width: "auto",
    maxWidth: "100%",
    height: "auto",
  };
  return (
    <section className="error">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="error-content text-center text-lg-start mb-lg-0 mb-6">
              <h1 className="text-primary">404</h1>
              <h2 className="mb-6">Page not found!</h2>
              <Link
                href="/"
                className="btn btn-primary"
              >
                Go to Home
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="text-center">
              <Image
                src="/images/404/error.png"
                className="error-image"
                alt="error-image"
                width={400}
                height={400}
                style={imageStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
