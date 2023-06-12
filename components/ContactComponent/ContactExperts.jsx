"use client";

import Image from "next/image";
import Link from "next/link";
import { imageStyle } from "@/data/data";
const ContactExperts = ({ contactExperts }) => {
  const { experts } = contactExperts;
  return (
    <>
      {experts.map((item, i) => (
        <div className="team-member" key={i}>
          <Image
            src={item.image}
            alt="team-member-thumb"
            className="team-member-thumb"
            width={350}
            height={350}
            styles={imageStyle}
          />
          <div className="team-member-details">
            <h3>{item.name}</h3>
            <p>{item.designation}</p>
            <p className="fw-bold mb-0">
              <strong>Phone: </strong>
              <Link href={`tel:${item.phone}`} className="text-primary">
                {item.phone}
              </Link>
            </p>
            <p className="fw-bold mb-0">
              <strong>E-mail: </strong>
              <Link href={`mailto:${item.email}`} className="text-primary">
                {item.email}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </>
  );
};
export default ContactExperts;
