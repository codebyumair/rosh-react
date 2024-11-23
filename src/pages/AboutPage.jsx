import React, { useState, useEffect } from "react";
import AboutSection from "../sections/AboutSection";
import FounderOne from "../sections/FounderOne";
import FounderTwo from "../sections/FounderTwo";
import FounderThree from "../sections/FounderThree";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

const AboutPage = () => {
  const [isLoaded, setIsLoaded] = useState(false); // State to control preloader

  useEffect(() => {
    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set `isLoaded` to true after preloader finishes
    }, 1500); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timer on unmount
  });

  return (
    <>
      {!isLoaded ? (
        <Preloader title="About" />
      ) : (
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
          <div className="h-screen overflow-y-scroll bg-primary bg-opacity-[.88] md:pt-40 pt-24 md:px-16 snap-start">
            <div className="h-full">
              <FounderThree />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutPage;
