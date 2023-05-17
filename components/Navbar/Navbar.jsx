import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div className="">
        <Link href="/">Grouwthus</Link>
        <div className="">
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/job">Job</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
