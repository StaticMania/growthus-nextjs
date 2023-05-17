"use client";
import React from "react";
import {useEffect} from "react";
const Footer = () => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return <div className="">Footer</div>;
};

export default Footer;
