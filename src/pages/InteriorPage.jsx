import product1 from "../assets/products/INTERNATION-SCHOOL-Frame-1.png";
import product2 from "../assets/products/Tagged-Glass-Partition-Frame-2.png";
import product3 from "../assets/products/A-Kitchen-Wall-Frame-3.png";
import product4 from "../assets/products/A-Glass-Partition-Frame-4.png";
import product5 from "../assets/products/A-Thick-Glass-Mural-Frame-5.png";
import product6 from "../assets/products/Stained-Glass-Ceiling-Frame-6.png";
import product7 from "../assets/products/door-in-Living-Room-Frame-7.png";
import product8 from "../assets/products/Washbasin-Mirror-frame-8.png";
import sunrays from "../assets/icons/sunrays.svg";
import Footer from "../components/Footer";
import green from "../assets/icons/green.svg";
import red from "../assets/icons/red.svg";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { productImages } from "../data/products";

const images = [
  {
    id: 1,
    src: productImages[0],
    additionalImages: [],
  },
  {
    id: 2,
    src: productImages[1],
    additionalImages: [],
  },
  {
    id: 3,
    src: productImages[2],
    additionalImages: [],
  },
  {
    id: 4,
    src: productImages[3],
    additionalImages: [],
  },
  {
    id: 5,
    src: productImages[4],
    additionalImages: [],
  },
  {
    id: 6,
    src: productImages[5],
    additionalImages: [],
  },
  {
    id: 7,
    src: productImages[6],
    additionalImages: [],
  },
  {
    id: 8,
    src: productImages[7],
    additionalImages: [],
  },
  {
    id: 9,
    src: productImages[8],
    additionalImages: [],
  },
];

const InteriorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mainImage, setMainImage] = useState(null);

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
    <div className="background-container overflow-y-scroll h-screen">
      <div className="pt-36 pb-16 px-4 md:px-8 bg-primary bg-opacity-[.88] product-container">
        <h2 className="font-dmRegular md:text-4xl text-center mb-16 border border-l-0 border-r-0 w-fit mx-auto border-black md:py-2 py-2 relative">
          <img
            src={green}
            alt=""
            className="md:w-[12px] w-[10px] mx-auto absolute left-[50%] top-[-5px] md:top-[-6px]"
          />
          Interiors In Stained Glass
          <img
            src={red}
            alt=""
            className="md:w-[12px] w-[10px] mx-auto absolute left-[50%] bottom-[-5px] md:bottom-[-6px]"
          />
        </h2>
        <div className="container mx-auto md:px-8 px-0">
          <div className="row">
            <div className="products w-full leading-[1.1rem]">
              <div className="product relative md:rounded-s-[2rem] md:w-[90%] rounded-s-3xl flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={sunrays}
                  alt=""
                  className="absolute size-7 md:size-10 -top-[.9rem]  md:-top-[1.30rem] md:left-[30%] left-[45%] translate-x-[-50%] "
                />
                <img
                  src={product1}
                  alt="product1"
                  className="w-[150px] md:w-[270px] border border-r-0 border-black md:p-3 p-2 rounded-s-2xl md:rounded-s-3xl "
                  onClick={() => openModal(images[0])}
                />
                <span className="font-dmRegular text-sm text-nowrap md:text-2xl ">
                  <span className="hidden md:inline-flex font-dmRegular md:text-2xl text-left">
                    “INTERNATIONAL <br /> SCHOOL OF ANCIENT <br /> WISDOM” A
                    Stained-glass <br /> mural in a meditation <br /> hall in
                    Bangalore (Planet Earth)
                  </span>
                  <span className="md:hidden font-dmRegular text-sm md:text-2xl text-right text-nowrap md:text-wrap">
                    “INTERNATIONAL <br /> SCHOOL OF ANCIENT <br /> WISDOM” A
                    Stained-glass <br /> mural in a meditation <br /> hall in
                    Bangalore <br /> (Planet Earth)
                  </span>
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[90%] md:rounded-e-[2rem] rounded-e-3xl -mt-[1px] md:-mt-[.8px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl text-nowrap md:text-wrap text-right">
                  Tagged Glass Partition{" "}
                  <br className="md:hidden inline-flex" />
                  between <br className="hidden md:inline-flex" /> Living Room
                  <br className="md:hidden inline-flex" /> and Dining
                </span>
                <img
                  src={product2}
                  alt="product1"
                  className="w-[150px] md:w-[270px] p-2 md:p-3"
                  onClick={() => openModal(images[1])}
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl -mt-[1px] md:-mt-[.8px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product3}
                  alt="product1"
                  className="w-[150px] md:w-[270px] md:p-3 p-2 "
                  onClick={() => openModal(images[2])}
                />
                <span className="font-dmRegular  text-sm md:text-2xl text-nowrap md:text-wrap">
                  A Kitchen Wall Made <br /> by Fused Glass
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl -mt-[1px] md:-mt-[.9px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm text-right  md:text-2xl text-nowrap">
                  A Glass Partition Panel
                  <br
                    className="
                inline-flex md:hidden"
                  />{" "}
                  <br className="md:inline-flex hidden" />
                  in Reception Area
                </span>
                <img
                  src={product4}
                  alt="product1"
                  className="w-[150px] md:w-[270px] md:p-3 p-2 "
                  onClick={() => openModal(images[3])}
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product5}
                  alt="product1"
                  className="w-[150px] md:w-[270px] md:p-3 p-2 "
                  onClick={() => openModal(images[4])}
                />
                <span className="font-dmRegular  text-sm md:text-2xl text-nowrap capitalize">
                  A thick glass mural
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-right text-sm md:text-2xl text-nowrap md:text-wrap">
                  Stained Glass Ceiling
                  <br className="md:inline-flex flex" />
                  in Conference Room
                </span>
                <img
                  src={product6}
                  alt="product1"
                  className="w-[150px] md:w-[270px] md:p-3 p-2 "
                  onClick={() => openModal(images[5])}
                />
              </div>
              <div className="product border border-r-0 border-black w-[90%] md:w-[90%] md:rounded-s-[2rem] rounded-s-3xl -mt-[1px] md:-mt-[.9px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product7}
                  alt="product1"
                  className="w-[150px] md:w-[270px] md:p-3 p-2 "
                  onClick={() => openModal(images[6])}
                />
                <span className="font-dmRegular  text-sm md:text-2xl text-nowrap md:text-wrap">
                  Door in Living Room <br /> (Fused Glass)
                </span>
              </div>

              <div className="product relative ml-auto w-[90%] md:rounded-e-[2rem] rounded-e-3xl -mt-[1px] md:-mt-[.5px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl text-right text-nowrap md:text-wrap">
                  Washbasin Mirror
                </span>
                <img
                  src={product8}
                  alt="product1"
                  className="w-[150px] md:w-[270px] border border-l-0 border-black md:p-3 p-2 rounded-e-2xl md:rounded-e-3xl "
                  onClick={() => openModal(images[7])}
                />
                <img
                  src={sunrays}
                  alt=""
                  className="absolute size-7 md:size-10 -bottom-[.9rem]  md:-bottom-[1.30rem] md:left-[70%] left-[48%] translate-x-[-50%] scale-x-[-1]"
                />
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
              className={` w-full object-contain ${
                selectedImage.id === 6 || selectedImage.id === 8
                  ? "h-[480px] w-auto"
                  : "h-auto"
              }`}
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
  );
};
export default InteriorPage;
