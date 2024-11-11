import React, { useEffect, useState } from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import FounderOne from "../sections/FounderOne";
import FounderTwo from "../sections/FounderTwo";
import FounderThree from "../sections/FounderThree";
import ProductSection from "../sections/ProductSection";
import Footer from "../components/Footer";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true); // Set `isLoaded` to true every time the HomePage mounts

    return () => {
      setIsLoaded(false); // Reset `isLoaded` when unmounting to allow reload
    };
  }, []); // This will run each time the HomePage is visited

  return (
    <div
      onContextMenu={handleContextMenu}
      className="home h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory"
    >
      <div className="h-screen md:pt-40 pt-24 relative snap-start">
        {isLoaded && <HeroSection />}
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
    </div>
  );
};

export default HomePage;
