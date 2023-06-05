"use client";
import {CaretRight, CaretLeft} from "@phosphor-icons/react";
const Pagination = ({goToNextPage, goToPreviousPage, currentPage, totalPage}) => {
  return (
    <div className="row">
      <div className="pagination pt-4 pt-lg-8 d-lg-flex align-items-center justify-content-lg-start justify-content-center">
        <nav aria-label="Page navigation example">
          <ul className="pagination d-lg-flex align-items-center mb-0">
            <li className="page-item">
              <button
                className="btn btn-outline"
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
              >
                <span className="position-relative">
                  <CaretLeft size={14} />
                  Previous Page
                </span>
              </button>
            </li>
            <li className="page-item active">
              <button
                className="btn btn-outline"
                onClick={goToNextPage}
                disabled={currentPage === totalPage}
              >
                <span className="position-relative">
                  Next Page
                  <CaretRight size={14} />
                </span>
              </button>
            </li>
            <li className="page-item">
              <span className="page-link">
                {currentPage} /<span className="page-total"> {totalPage} pages </span>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
