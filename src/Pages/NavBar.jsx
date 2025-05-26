import React, { useState, useEffect } from "react";
import { PiCoffeeBold } from "react-icons/pi";
import { Link } from "react-router-dom";

function Navbar() {
  // const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const isScrolled = window.scrollY > 10;
  //     if (isScrolled !== scrolled) {
  //       setScrolled(isScrolled);
  //     }
  //   };

  //   document.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     document.removeEventListener("scroll", handleScroll);
  //   };
  // }, [scrolled]);

  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent shadow-none"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <Link
                className="font-bold hover:bg-amber-700 hover:text-white rounded-xl"
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="font-bold hover:bg-amber-700 hover:text-white rounded-xl"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="font-bold hover:bg-amber-700 hover:text-white rounded-xl"
                to="/product"
              >
                Coffee Products
              </Link>
            </li>
            <li>
              <Link
                className="font-bold hover:bg-amber-700 hover:text-white rounded-xl"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl gap-2">
          <PiCoffeeBold className="text-amber-800" />
          <span className={scrolled ? "text-gray-800" : "text-white"}>
            Aroma Sriwijaya
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link
              className={`font-bold hover:bg-amber-700 hover:text-white rounded-xl ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`font-bold hover:bg-amber-700 hover:text-white rounded-xl ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              to="/about"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className={`font-bold hover:bg-amber-700 hover:text-white rounded-xl ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              to="/product"
            >
              Coffee Products
            </Link>
          </li>
          <li>
            <Link
              className={`font-bold hover:bg-amber-700 hover:text-white rounded-xl ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5 mr-10">
        <Link
          className={`btn rounded-xl hover:bg-amber-800 hover:text-white ${
            scrolled
              ? "bg-white text-gray-800"
              : "bg-white/20 text-white backdrop-blur-sm"
          }`}
          to="/contact"
        >
          Request a Quote
        </Link>
        <Link
          className="btn bg-amber-800 text-white rounded-xl hover:bg-orange-400"
          to="/contact"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
