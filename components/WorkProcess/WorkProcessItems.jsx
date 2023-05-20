"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {CaretRight, CheckCircle, User} from "@phosphor-icons/react";
const WorkProcessItems = ({data}) => {
  const {
    image,
    title,
    paragraph,
    user,
    userCount,
    sale,
    currentSale,
    previousSale,
    SaleIncrease,
    payment,
    paymentAmount,
    paymentDate,
  } = data;

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };
  return (
    <div className="row work-item-container align-items-center">
      <div className={`col-lg-6 ${sale ? "order-2 order-lg-1" : user ? "order-2 order-lg-2" : "order-2 order-lg-2"}`}>
        <div className="work-item">
          <div className={`work-content ${sale ? "work-left-content" : ""}`}>
            <h2>{title}</h2>
            <p>{paragraph}</p>
            <Link
              href="/"
              className="btn btn-secondary"
            >
              <span className="position-relative">
                Learn More
                <CaretRight
                  size={14}
                  weight="thin"
                />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className={`col-lg-6 ${sale ? "order-1 order-lg-2" : user ? "order-1 order-lg-1" : "order-1 order-lg-1"}`}>
        <div className="work-item">
          <div className="work-item-shape-wrapper">
            <div
              className={`work-item-shape ${
                sale ? "right-shape bg-orange-light" : user ? "bg-light-dark" : "bg-primary-light"
              }`}
            >
              <Image
                src="/images/work/work-shap.svg"
                alt="work image"
                fill
              />
            </div>
          </div>
          <div className="work-item-wraper">
            <div className="work-item-wraper-banner">
              <Image
                src={image}
                alt="work image"
                width={540}
                height={590}
                style={imageStyle}
              />
            </div>
            {user ? (
              <>
                <div className="work-shape-one">
                  <div className="work-shape-one-icon">
                    <User
                      size={32}
                      weight="thin"
                    />
                  </div>
                  <div className="work-shape-one-content">
                    <h5>+{userCount}</h5>
                    <span>Happy User</span>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            {sale ? (
              <>
                <div className="work-shape-two">
                  <div className="work-shape-two-head">
                    <span>Sales</span>
                    <span className="badge badge-primary">+${SaleIncrease}%</span>
                  </div>
                  <div className="work-shape-two-content">
                    <h5>${currentSale}M</h5>
                    <span>Compared to ${previousSale}M (last Year)</span>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
            {payment ? (
              <>
                <div className="work-shape-three">
                  <div className="work-shape-three-head">
                    <h5>${paymentAmount}</h5>
                    <span>Payment Received</span>
                  </div>
                  <div className="work-shape-three-content">
                    <div className="work-shape-three-content-item">
                      <h5>Which Date</h5>
                      <span>${paymentDate}</span>
                    </div>
                    <div className="work-shape-three-content-item">
                      <h5>Recieved</h5>
                      <CheckCircle
                        size={20}
                        weight="thin"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcessItems;
