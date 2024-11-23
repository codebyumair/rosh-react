import React, { useEffect, useState } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import FounderOne from "../sections/FounderOne";
import FounderTwo from "../sections/FounderTwo";
import FounderThree from "../sections/FounderThree";
import ProductSection from "../sections/ProductSection";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader"; // Import the Preloader component

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false); // State to control preloader

  useEffect(() => {
    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set `isLoaded` to true after preloader finishes
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timer on unmount
  });

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      className="home h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
    >
      {!isLoaded ? (
        <Preloader title="ROSH - POETRY IN GLASS" /> // Show Preloader if not loaded
      ) : (
        <>
          <div className="h-screen md:pt-40 pt-24 relative snap-start">
            <HeroSection />
          </div>
          <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 snap-start">
            <AboutSection />
          </div>
          <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 md:px-16 snap-start">
            <FounderOne />
          </div>
          <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 md:px-16 snap-start">
            <FounderTwo />
          </div>
          <div className="h-screen bg-primary bg-opacity-[.88] md:pt-40 pt-24 md:px-16 snap-start">
            <FounderThree />
          </div>
          <div className="h-screen overflow-y-scroll pt-28 md:pt-36 bg-primary bg-opacity-[.88] snap-start">
            <ProductSection />
            <div className="pt-6">
              <Footer />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
