import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="">
        <Link href="/" className="navbar-brand">
          Grouwthus
        </Link>
        <div className="navbar-nav">
          <Link href="/about" className="nav-link">
            About
          </Link>
          <Link href="/services" className="nav-link">
            Services
          </Link>
          <Link href="/job" className="nav-link">
            Job
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
