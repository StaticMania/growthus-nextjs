"use client";
import Image from "next/image";

function TestimonialItems({ data }) {
  const {
    author,
    designation,
    paragraph,
    rating,
    ratingImage,
    authorImage,
    emoji,
  } = data;
  return (
    <div className="card item">
      <div className="profile">
        <Image src={authorImage} alt="authorimage" width={44} height={44} />
        <Image src={emoji} alt="emoji" width={44} height={44} />
      </div>
      <div className="card-body">
        <div className={`icon`}>
          {Array.from({ length: `${rating}` }, (_, index) => index + 1).map(
            (number, index) => (
              <div key={index}>
                <Image
                  src={ratingImage}
                  alt="ratingImage"
                  width={20}
                  height={20}
                />
              </div>
            )
          )}
        </div>
        <h5>{paragraph}</h5>
        <div className="content">
          <h6>{author}</h6>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialItems;
