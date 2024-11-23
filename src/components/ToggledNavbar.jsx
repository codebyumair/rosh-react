import React from "react";
import { NavLink } from "react-router-dom";

const ToggledNavbar = ({ toggleNavbar, setNavbar, navbar, navRef }) => {
  const handleLinkClick = () => {
    setNavbar(false);
    navRef.current.classList.remove("toggle-navbar");
  };

  return (
    <div
      className="navbar text-font uppercase flex flex-col gap-1 right-[.9rem] md:right-[3.5rem] rounded-xl bg-primary border border-borderColor p-2 shadow-xl"
      ref={navRef}
    >
      <NavLink
        to="/"
        onClick={handleLinkClick}
        className="flex items-center gap-2 group hover:bg-secondary active:bg-secondary transition-all delay-100 rounded-lg p-2 pr-4"
      >
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/contact"
        onClick={handleLinkClick}
        className="flex items-center gap-2 group hover:bg-secondary active:bg-secondary transition-all delay-100 rounded-lg p-2 pr-4"
      >
        <span>Contact</span>
      </NavLink>
      <NavLink
        to="/about"
        onClick={handleLinkClick}
        className="flex items-center gap-2 group hover:bg-secondary active:bg-secondary transition-all delay-100 rounded-lg p-2 pr-4"
      >
        <span>about</span>
      </NavLink>
      <NavLink
        to="/product/interiors-in-stained-glass"
        onClick={handleLinkClick}
        className="flex items-center gap-2 group hover:bg-secondary active:bg-secondary transition-all delay-100 rounded-lg p-2 pr-4"
      >
        <span>interiors in stained glass</span>
      </NavLink>
      <NavLink
        to="/product/fusion-glass-showpiece"
        onClick={handleLinkClick}
        className="flex items-center gap-2 group hover:bg-secondary active:bg-secondary transition-all delay-100 rounded-lg p-2 pr-4"
      >
        <span>fusion glass showpiece</span>
      </NavLink>
    </div>
  );
};

export default ToggledNavbar;
