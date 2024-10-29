import React, { useEffect, useRef, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import logo from "../assets/logo-with-text.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [loading, setLoading] = useState(true);
  const navRef = useRef();

  const toggleNavbar = () => {
    setNavbar(!navbar);
    navRef.current.classList.toggle("toggle-navbar");
  };

  return (
    <header className="flex items-center justify-between md:px-8 px-4 py-4 fixed w-full">
      <Link to="/">
        <img src={logo} alt="Rosh-Logo" className="md:w-[100px] w-[80px]" />
      </Link>
      <button onClick={toggleNavbar} style={{ zIndex: 51 }}>
        <Hamburger
          toggled={navbar}
          toggle={setNavbar}
          direction="left"
          size={20}
          color="#000000"
        />
      </button>
    </header>
  );
};
export default Header;
