"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Caret from "./Common/Caret";
import Pagination from "./Pagination";
import { imageStyle } from "@/data/data";

const AllBlogs = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPage = Math.ceil(posts.length / itemsPerPage);

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return posts.slice(startIndex, endIndex);
  };

  const currentPageData = paginateData();

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };
  return (
    <section className="blog py-8">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {currentPageData.map((post, i) => (
              <article className="card flex-lg-row" key={i}>
                <div className="blog-post-item-thumb">
                  <Image
                    src={post.thumbnail}
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
                        {post.tags.map((item, i) => (
                          <Link
                            href={`/taxonomy/${item}`}
                            key={i}
                            className="me-1"
                          >
                            <span className="badge">{item}</span>
                          </Link>
                        ))}
                      </li>
                      <li className="list-inline-item">
                        <span className="ms-2">{post.date}</span>
                      </li>
                    </ul>
                  </div>
                  <div className="blog-post-body">
                    <div className="blog-post-body-title">
                      <Link href={`/blog/${post.slug}`}>
                        <h3>{post.title}</h3>
                      </Link>
                      <p>{post.excerpt}</p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="btn btn-secondary"
                      >
                        <span>
                          Read the Blog
                          <Caret />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Pagination
          goToPreviousPage={goToPreviousPage}
          goToNextPage={goToNextPage}
          currentPage={currentPage}
          totalPage={totalPage}
        />
      </div>
    </section>
  );
};

export default AllBlogs;
