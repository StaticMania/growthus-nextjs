import React from "react";
import Image from "next/image";
const ClientImages = ({ClientImages}) => {
  const {images} = ClientImages;
  return (
    <div className="client-item">
      <Image
        src={images}
        alt="Client images"
        width={120}
        height={50}
      />
    </div>
  );
};
export default ClientImages;
