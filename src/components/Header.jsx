import React, { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../assets/logo-with-text.svg";
import { Link } from "react-router-dom";
import ToggledNavbar from "./ToggledNavbar";

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
      <header className="flex  items-center justify-between md:px-16 px-4 md:py-6 py-4 fixed w-full">
        <Link to="/">
          <img src={logo} alt="Rosh-Logo" className="md:w-[90px] w-[80px]" />
        </Link>
        <button
          // onClick={toggleNavbar}
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
      </header>
      {/* <ToggledNavbar
        toggleNavbar={toggleNavbar}
        setNavbar={setNavbar}
        navbar={navbar}
        navRef={navRef}
      /> */}
    </>
  );
};
export default Header;
