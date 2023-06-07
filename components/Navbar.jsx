"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { menuData } from "@/data/data.js";
import Image from "next/image";
import * as Icon from "@phosphor-icons/react";
const Navbar = () => {
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  }, []);

  // submenu handler
  const [collapsed, setCollapsed] = useState(true);
  // Menu acive
  const [active, setActive] = useState(null);
  return (
    <>
      <nav
        className={`
          ${
            sticky
              ? "navbar navbar-expand-lg position-fixed w-100 zindex-dropdown sticky-nav"
              : "navbar navbar-expand-lg position-fixed w-100 zindex-dropdown "
          }`}
        id="navigationBar"
      >
        <div className="container">
          <Link
            className="navbar-brand"
            href="/"
            onClick={() => setActive(null)}
          >
            <Image src={menuData.logo} alt="logo" width={140} height={30} />
          </Link>
          <button
            type="button"
            data-bs-toggle="collapse"
            className={
              collapsed ? "navbar-toggler collapsed p-3" : "navbar-toggler p-3"
            }
            onClick={() => {
              setCollapsed(!collapsed);
            }}
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={collapsed ? false : true}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-default">
              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"
                ></path>
              </svg>
            </span>
            <span className="navbar-toggler-toggled">
              <svg
                width="14"
                height="14"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="white"
                  d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"
                ></path>
              </svg>
            </span>
          </button>
          <div
            className={
              collapsed
                ? "collapse navbar-collapse"
                : "collapse navbar-collapse show"
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-xl-5">
              {menuData.menuContent.map((menuItem) => (
                <li
                  className={`${
                    menuItem.path ? " nav-item " : "nav-item dropdown"
                  }`}
                  key={menuItem.id}
                >
                  {menuItem.path ? (
                    <>
                      <Link
                        href={menuItem.path}
                        onClick={() => setActive(menuItem)}
                        className={`nav-link ${
                          active === menuItem ? "active" : ""
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    </>
                  ) : (
                    <>
                      <a
                        className="nav-link dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                      >
                        {menuItem.title}
                        <Icon.CaretDown size={16} />
                      </a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-menu-wrapper">
                          <ul className="list-unstyled">
                            {menuItem.submenu.map((submenuItem) => (
                              <li
                                className="dropdown-menu-item"
                                key={submenuItem.id}
                              >
                                <Link href={submenuItem.path}>
                                  {submenuItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </>
                  )}
                </li>
              ))}
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ms-lg-6 ms-sm-0">
                <Link
                  className="btn btn-navigation w-100"
                  href={menuData.link}
                  replace
                >
                  Let&apos;s Talk
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
