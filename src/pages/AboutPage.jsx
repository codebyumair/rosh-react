import React from "react";
import AboutSection from "../sections/AboutSection";
import FounderOne from "../sections/FounderOne";
import FounderTwo from "../sections/FounderTwo";
import FounderThree from "../sections/FounderThree";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="background-container h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory">
        <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 snap-start">
          <AboutSection />
        </div>
        <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 md:px-16 snap-start">
          <FounderOne />
        </div>
        <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 md:px-16 snap-start">
          <FounderTwo />
        </div>
        <div className="h-screen overflow-y-scroll  bg-primary bg-opacity-[.88] md:pt-40 pt-24 md:px-16 snap-start">
          <FounderThree />
          <div className="pt-16">
            <Footer />
          </div>
        </div>
        {/* <div className="bg-primary snap-start">
          <Footer />
        </div> */}
      </div>
    </>
  );
};

export default AboutPage;
