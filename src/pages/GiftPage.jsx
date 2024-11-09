import product1 from "../assets/products/In-a-washroom-mirror.png";
import product2 from "../assets/products/Wall-hanging-beautiful-glass-lady.png";
import product3 from "../assets/products/For-wall-Hanging-Krishna.png";
import product4 from "../assets/products/INTERNATIONAL-SCHOOL-OF-ANCIENT-WISDOM.png";
import product5 from "../assets/products/Stained-glass-ceiling-in-conference-room.png";
import product6 from "../assets/products/A-thick-glass-mural.png";
import product7 from "../assets/products/A-kitchen-wall-made-by-fused-glass.png";
import product8 from "../assets/products/Tagged-glass-partition-between-living-room-and-dining.png";
import product9 from "../assets/products/A-glass-partition-panel-in-Reception-area.png";
import product10 from "../assets/products/Fusioned-glass-map-of-Indian.png";
import product11 from "../assets/products/Om-Table-show-piece.png";
import product12 from "../assets/products/A-unique-glass-Ashtray.png";
import product13 from "../assets/products/Double-side-photo-frame-two-in-one.png";
import sunrays from "../assets/icons/sunrays.svg";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const GiftPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const openModal = (images) => {
    setModalImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImages([]);
  };

  const products = [
    { images: [product10], name: "Fusioned glass map of Indian" },
    { images: [product11], name: "Om Table Showpiece" },
    { images: [product12], name: "A unique glass Ashtray" },
    { images: [product13], name: "Double side photo frame two in one" },
    // Add other products here
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="background-container">
      <div className="pt-36 pb-16 px-4 md:px-8 bg-primary bg-opacity-[.88] product-container">
        <h2 className="font-dmRegular md:text-4xl text-center mb-16">
          Fusion Glass Showpiece
        </h2>
        <div className="container mx-auto">
          <div className="row">
            <div className="products w-full">
              <div className="product relative border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={sunrays}
                  alt=""
                  className="absolute size-10 -top-[1.30rem] md:left-[100%]  left-[105%] translate-x-[-50%]"
                />
                <img
                  src={product10}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular md:text-2xl text-left text-nowrap">
                  Fusioned glass <br className="md:hidden inline-flex" /> map of
                  Indian
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span
                  className="font-dmRegular text-right md:text-2xl text-nowrap
              "
                >
                  Om Table <br className="md:hidden" /> Showpiece
                </span>
                <img
                  src={product11}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product12}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <span className="font-dmRegular md:text-2xl text-left text-nowrap">
                  A unique <br className="md:hidden" /> glass Ashtray
                </span>
              </div>
              <div className="product relative border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[.9px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular md:text-2xl text-nowrap text-right">
                  Double side photo <br /> frame two in one
                </span>
                <img
                  src={product13}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                />
                <img
                  src={sunrays}
                  alt=""
                  className="absolute size-10 -bottom-[1.30rem] md:left-[0%] left-[0%] translate-x-[-50%] scale-x-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default GiftPage;
