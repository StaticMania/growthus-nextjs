import React from "react";
import Image from "next/image";
const BusinessSolutionItems = ({data}) => {
  const {icon, title, paragraph} = data;
  return (
    <div className="col-lg-4">
      <div className="services-item">
        <div className="services-item-icon">
          <Image
            src={icon}
            alt="businessSolution Icon"
            width={70}
            height={50}
          />
        </div>
        <div className="services-item-content">
          <h3>{title}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutionItems;
