import React, { useState, useEffect } from "react";
import logoWithText from "../assets/logo-with-text.svg";
import logoWithoutText from "../assets/logo-without-text.svg";

const HeroSection = () => {
  const [showLogoWithText, setShowWithText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWithText(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <section className="h-screen overflow-hidden hero-section lg:pt-48 md:pt-36 pt-44 sticky top-0">
        {!showLogoWithText ? (
          <img
            src={logoWithoutText}
            alt=""
            className="md:w-[100px] w-[75px] img-without-text mx-auto"
            style={{ zIndex: 99999 }}
          />
        ) : (
          <img
            src={logoWithText}
            alt=""
            className="absolute md:w-[189px] w-[140px] mx-auto translate-x-[-50%] left-[50%] img-with-text"
          />
        )}
      </section>
    </>
  );
};
export default HeroSection;
