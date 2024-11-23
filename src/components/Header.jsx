import React, { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../assets/logo-with-text.svg";
import { Link } from "react-router-dom";
import ToggledNavbar from "./ToggledNavbar";
import { motion } from "framer-motion";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const navRef = useRef();
  const headerRef = useRef();

  const toggleNavbar = () => {
    setNavbar(!navbar);
    navRef.current.classList.toggle("toggle-navbar");
  };

  const handleLinkClick = () => {
    setNavbar(false);
    navRef.current.classList.remove("toggle-navbar");
  };

  // Close the navbar if clicking outside of the header or navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        headerRef.current &&
        !navRef.current.contains(event.target) &&
        !headerRef.current.contains(event.target)
      ) {
        setNavbar(false);
        navRef.current.classList.remove("toggle-navbar");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 3 }}
        exit={{ opacity: 0, y: -100 }}
        className="flex items-center justify-between md:px-16 px-4 md:py-6 py-4 fixed w-full"
        style={{ zIndex: 99 }}
      >
        <Link
          to="/"
          className="bg-primary rounded-2xl md:p-3 p-2 border border-borderColor"
          onClick={handleLinkClick}
        >
          <img
            src={logo}
            alt="Rosh - Poetry In Glass Logo"
            className="md:w-[90px] w-[60px]"
          />
        </Link>
        <button
          onClick={toggleNavbar}
          style={{ zIndex: 51 }}
          className="bg-primary border border-borderColor rounded-xl shadow-2xl"
        >
          <Hamburger
            toggled={navbar}
            toggle={setNavbar}
            direction="left"
            size={18}
            color="#000000"
          />
        </button>
      </motion.header>
      <ToggledNavbar
        toggleNavbar={toggleNavbar}
        setNavbar={setNavbar}
        navbar={navbar}
        navRef={navRef}
      />
    </>
  );
};

export default Header;
