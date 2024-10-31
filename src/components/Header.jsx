import React, { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../assets/logo-with-text.svg";
import { Link } from "react-router-dom";
import ToggledNavbar from "./ToggledNavbar";
import { motion } from "framer-motion";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [loading, setLoading] = useState(true);
  const navRef = useRef();

  const toggleNavbar = () => {
    setNavbar(!navbar);
    navRef.current.classList.toggle("toggle-navbar");
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 3 }}
        exit={{ opacity: 0, y: -100 }}
        className="flex  items-center justify-between md:px-16 px-4 md:py-6 py-4 fixed w-full"
        style={{ zIndex: 99 }}
      >
        <Link to="/">
          <img src={logo} alt="Rosh-Logo" className="md:w-[90px] w-[80px]" />
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
