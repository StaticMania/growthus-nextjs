"use client";
import Image from "next/image";
import Link from "next/link";
import { CaretRight } from "@phosphor-icons/react";
import { imageStyle } from "@/data/data";
const RelatedBlog = ({ props }) => {
  return (
    <>
      <div className="col-lg-4">
        <article className="card">
          <div className="blog-post-item-thumb">
            <Image
              src={props.thumbnail}
              alt="featured-thumb1"
              className="w-100"
              width={500}
              height={500}
              style={imageStyle}
            />
          </div>
          <div className="blog-post-content">
            <div className="blog-post-meta mb-3">
              <ul className="list-inline list-unstyled">
                <li className="list-inline-item">
                  {props.tags.map((item, i) => (
                    <Link href={`/taxonomy/${item}`} key={i} className="me-1">
                      <span className="badge">{item}</span>
                    </Link>
                  ))}
                </li>
                <li className="list-inline-item">
                  <span className="ms-2">{props.date}</span>
                </li>
              </ul>
            </div>
            <div className="blog-post-body">
              <div className="blog-post-body-title">
                <Link href={`/blog/${props.slug}`}>
                  <h3>{props.title}</h3>
                </Link>
                <Link
                  href={`/blog/${props.slug}`}
                  className="btn btn-secondary"
                >
                  <span>
                    Read the Blog
                    <CaretRight size={14} weight="thin" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};
export default RelatedBlog;
