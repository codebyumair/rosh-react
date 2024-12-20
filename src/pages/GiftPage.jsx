import product9 from "../assets/products/Map-of-India-in-Fused-Glass-Frame-9.webp";
import product10 from "../assets/products/Om-Table-Showpiece-Frame-10.webp";
import product11 from "../assets/products/Krishna-in-Fused-Glass-for-Wall-Frame-11.webp";
import product12 from "../assets/products/Wall-Hanging-Beautiful-Glass-Lady-Frame-12.webp";
import product13 from "../assets/products/Double-Side-Photo-Frame-Two-in-One-Frame-13.webp";
import product14 from "../assets/products/A-Unique-Glass-Ashtray-Frame-14.webp";
import green from "../assets/icons/green.svg";
import red from "../assets/icons/red.svg";
import sunrays from "../assets/icons/sunrays.svg";
import Footer from "../components/Footer";
import { productImages } from "../data/products";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Preloader from "../components/Preloader";

const images = [
  {
    id: 1,
    src: productImages[8],
    additionalImages: [],
  },
  {
    id: 2,
    src: productImages[9],
    additionalImages: [],
  },
  {
    id: 3,
    src: productImages[10],
    additionalImages: [],
  },
  {
    id: 4,
    src: productImages[11],
    additionalImages: [],
  },
  {
    id: 5,
    src: productImages[12],
    additionalImages: [productImages[12], productImages[13]],
  },
  {
    id: 6,
    src: productImages[14],
    additionalImages: [],
  },
];

const GiftPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false); // State to control preloader

  useEffect(() => {
    // Simulate loading time for preloader
    const timer = setTimeout(() => {
      setIsLoaded(true); // Set `isLoaded` to true after preloader finishes
    }, 1500); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timer on unmount
  });

  const openModal = (image) => {
    setSelectedImage(image);
    setMainImage(image.src);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setMainImage(null);
  };

  const handleThumbnailClick = (thumbnailSrc) => {
    setMainImage(thumbnailSrc);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {!isLoaded ? (
        <Preloader title="Fusion Glass Showpiece" />
      ) : (
        <div className="background-container h-screen overflow-y-scroll">
          <div className="pt-36 pb-16 px-4 md:px-8 bg-primary bg-opacity-[.88] product-container">
            <h2 className="font-dmRegular md:text-4xl text-center mb-16 border border-l-0 border-r-0 w-fit mx-auto border-black md:py-2 py-2 relative">
              <img
                src={green}
                alt=""
                className="md:w-[12px] w-[10px] mx-auto absolute left-[50%] top-[-5px] md:top-[-6px]"
              />
              Fusion Glass Showpiece
              <img
                src={red}
                alt=""
                className="md:w-[12px] w-[10px] mx-auto absolute left-[50%] bottom-[-5px] md:bottom-[-6px]"
              />
            </h2>
            <div className="container mx-auto">
              <div className="row">
                <div className="products w-full leading-[1.1rem] mx-auto">
                  <div className="relative w-full md:w-full flex items-center gap-3 md:gap-4">
                    <div className="relative border border-black border-r-0 rounded-s-3xl md:rounded-s-[2rem] w-[150px] md:w-[270px] ">
                      <img
                        src={sunrays}
                        alt=""
                        className="absolute size-7 md:size-10 -top-[.9rem]  md:-top-[1.30rem] md:left-[100%] left-[100%] -ml-[.50rem]"
                      />
                      <img
                        src={product9}
                        alt="product1"
                        className="min-w-[150px] md:w-[270px] md:p-3 p-2 "
                        onClick={() => openModal(images[0])}
                      />
                    </div>
                    <span className="title-font text-sm  md:text-2xl text-left text-nowrap">
                      Map of India <br className="md:hidden inline-flex" /> in
                      Fused Glass
                    </span>
                  </div>

                  <div className="product relative w-full md:w-full flex items-center justify-end gap-3 md:gap-4 md:-mt-[0.5px] -mt-[1px]">
                    <span className="title-font text-sm text-right  md:text-2xl text-nowrap">
                      Om Table <br className="md:hidden" /> Showpiece
                    </span>
                    <div className="border border-black border-l-0 rounded-e-3xl md:rounded-e-[2rem] w-[150px] md:w-[270px] ">
                      <img
                        src={product10}
                        alt="product1"
                        className="min-w-[150px] md:w-[270px] md:p-3 p-2 "
                        onClick={() => openModal(images[1])}
                      />
                    </div>
                  </div>
                  <div className="product relative w-full md:w-full flex items-center gap-3 md:gap-4 md:-mt-[1px] -mt-[1px]">
                    <div className="border border-black border-r-0 rounded-s-3xl md:rounded-s-[2rem] w-[150px] md:w-[270px] ">
                      <img
                        src={product11}
                        alt="product1"
                        className="min-w-[150px] md:w-[270px] md:p-3 p-2 "
                        onClick={() => openModal(images[2])}
                      />
                    </div>
                    <span className="title-font text-sm  md:text-2xl text-nowrap">
                      Krishna in Fused Glass <br className="md:hidden" /> for
                      Wall
                    </span>
                  </div>
                  <div className="product relative w-full md:w-full flex items-center justify-end gap-3 md:gap-4 md:-mt-[0.5px] -mt-[1px]">
                    <span className="title-font text-sm  md:text-2xl text-right text-nowrap">
                      Wall Hanging <br /> Beautiful Glass Lady
                    </span>
                    <div className="border border-black border-l-0 rounded-e-3xl md:rounded-e-[2rem] w-[150px] md:w-[270px] ">
                      <img
                        src={product12}
                        alt="product1"
                        className="min-w-[150px] md:w-[270px] md:p-3 p-2 "
                        onClick={() => openModal(images[3])}
                      />
                    </div>
                  </div>
                  <div className="product relative w-full md:w-full flex items-center gap-3 md:gap-4 md:-mt-[.5px] -mt-[1px]">
                    <div className="border border-black border-r-0 rounded-s-3xl md:rounded-s-[2rem] w-[150px] md:w-[270px] ">
                      <img
                        src={product13}
                        alt="product1"
                        className="min-w-[150px] md:w-[270px] md:p-3 p-2 "
                        onClick={() => openModal(images[4])}
                      />
                    </div>
                    <span className="title-font text-sm  md:text-2xl text-nowrap">
                      Double Side Photo <br /> Frame Two in One
                    </span>
                  </div>
                  <div className="product relative w-full md:w-full flex items-center justify-end gap-3 md:gap-4 md:-mt-[.5px] -mt-[1px]">
                    <span className="title-font text-sm  md:text-2xl text-nowrap text-right">
                      A Unique Glass Ashtray
                    </span>
                    <div className="relative border border-black border-l-0 rounded-e-3xl md:rounded-e-[2rem] w-[150px] md:w-[270px] ">
                      <img
                        src={sunrays}
                        alt=""
                        className="absolute size-7 md:size-10 -bottom-[.9rem]  md:-bottom-[1.30rem] md:left-[0%] left-[0%] scale-x-[-1] md:-ml-[2rem] -ml-[1.3rem]"
                      />
                      <img
                        src={product14}
                        alt="product1"
                        className="min-w-[150px] md:w-[270px] md:p-3 p-2 "
                        onClick={() => openModal(images[5])}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary bg-opacity-[.88]">
            <Footer />
          </div>
          {isModalOpen && selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4"
              style={{ zIndex: 999 }}
            >
              <div className="relative max-w-lg">
                <button
                  onClick={closeModal}
                  className="absolute -bottom-10 left-[50%] translate-x-[-50%] text-red bg-white p-2 rounded-xl"
                >
                  <MdClose />
                </button>
                <img
                  src={mainImage}
                  alt=""
                  className="w-full object-contain h-auto"
                />
                {console.log(selectedImage.id)}
                {selectedImage.additionalImages.length > 0 && (
                  <div className="flex space-x-2">
                    {selectedImage.additionalImages.map((thumbnail, index) => (
                      <img
                        key={index}
                        src={thumbnail}
                        alt=""
                        onClick={() => handleThumbnailClick(thumbnail)}
                        className="w-16 h-16 cursor-pointer border mt-4 border-gray-300 object-cover rounded-xl"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default GiftPage;
