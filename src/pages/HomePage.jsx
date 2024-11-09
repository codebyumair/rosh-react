import { useEffect } from "react";
import Footer from "../components/Footer";
import AboutSection from "../sections/AboutSection";
import FounderSection from "../sections/FounderSection";
import Hero from "../sections/Hero";
import HeroSection from "../sections/HeroSection";
import ProductSection from "../sections/ProductSection";
import Test from "../sections/Test";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      {/* <Test/> */}
      {/* <HeroSection /> */}
      {/* <AboutSection /> */}
      {/* <FounderSection /> */}
      <ProductSection />
      {/* <Footer /> */}
    </>
  );
};
export default HomePage;
