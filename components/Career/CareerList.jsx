"use client";
import Link from "next/link";
const CareerList = ({props}) => {
  return (
    <>
      <div className="career-item">
        <div className="career-item-desc">
          <a href="career-details.html">
            <h3>
              {props.title}
              <span className="badge new-job">{props.tag}</span>
            </h3>
          </a>
          <p>{props.jobType}</p>
        </div>
        <div className="career-item-link">
          <Link
            href={`/career/${props.slug}`}
            className="btn btn-secondary"
          >
            Apply
          </Link>
        </div>
      </div>
    </>
  );
};

export default CareerList;
