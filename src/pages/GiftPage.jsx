import product1 from "../assets/products/INTERNATION-SCHOOL-Frame-1.png";
import product2 from "../assets/products/Tagged-Glass-Partition-Frame-2.png";
import product3 from "../assets/products/A-Kitchen-Wall-Frame-3.png";
import product4 from "../assets/products/A-Glass-Partition-Frame-4.png";
import product5 from "../assets/products/A-Thick-Glass-Mural-Frame-5.png";
import product6 from "../assets/products/Stained-Glass-Ceiling-Frame-6.png";
import product7 from "../assets/products/door-in-Living-Room-Frame-7.png";
import product8 from "../assets/products/Washbasin-Mirror-frame-8.png";
import product9 from "../assets/products/Map-of-India-in-Fused-Glass-Frame-9.png";
import product10 from "../assets/products/Om-Table-Showpiece-Frame-10.png";
import product11 from "../assets/products/Krishna-in-Fused-Glass-for-Wall-Frame-11.png";
import product12 from "../assets/products/Wall-Hanging-Beautiful-Glass-Lady-Frame-12.png";
import product13 from "../assets/products/Double-Side-Photo-Frame-Two-in-One-Frame-13.png";
import product14 from "../assets/products/A-Unique-Glass-Ashtray-Frame-14.png";
import green from "../assets/icons/green.svg";
import red from "../assets/icons/red.svg";
import sunrays from "../assets/icons/sunrays.svg";
import Footer from "../components/Footer";
import { productImages } from "../data/products";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

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
    <div className="background-container h-screen overflow-y-scroll">
      <div className="md:pt-36 pt-28 pb-16 px-4 md:px-8 bg-primary bg-opacity-[.88] product-container">
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
            <div className="products w-full leading-[1.1rem]">
              <div className="product relative md:rounded-s-[2rem] md:w-[90%] rounded-s-3xl flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={sunrays}
                  alt=""
                  className="absolute size-7 md:size-10 -top-[.9rem]  md:-top-[1.30rem] md:left-[30%] left-[45%] translate-x-[-50%] "
                />
                <img
                  src={product9}
                  alt="product1"
                  className="w-[150px] md:w-[270px] border border-r-0 border-black md:p-3 p-2 rounded-s-2xl md:rounded-s-3xl "
                  onClick={() => openModal(images[0])}
                />

                <span className="font-dmRegular text-sm  md:text-2xl text-left text-nowrap">
                  Map of India <br className="md:hidden inline-flex" /> in Fused
                  Glass
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[90%] md:w-[90%] md:rounded-e-[2rem] rounded-e-3xl -mt-[1px] md:-mt-[.9px] flex items-center justify-end md:gap-5 gap-3">
                <span
                  className="font-dmRegular text-sm text-right  md:text-2xl text-nowrap
              "
                >
                  Om Table <br className="md:hidden" /> Showpiece
                </span>
                <img
                  src={product10}
                  alt="product1"
                  className="w-[150px] md:w-[270px] md:p-3 p-2 "
                  onClick={() => openModal(images[1])}
                />
              </div>
              <div className="product border border-r-0 border-black w-[90%] md:rounded-s-[2rem] rounded-s-3xl -mt-[1px] md:-mt-[.9px]  flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product11}
                  alt="product1"
                  className="w-[150px] md:w-[270px] md:p-3 p-2 "
                  onClick={() => openModal(images[2])}
                />
                <span
                  className="font-dmRegular text-sm  md:text-2xl text-nowrap
              "
                >
                  Krishna in Fused Glass <br className="md:hidden" /> for Wall
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[90%] md:rounded-e-[2rem] rounded-e-3xl -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl text-right text-nowrap">
                  Wall Hanging <br /> Beautiful Glass Lady
                </span>
                <img
                  src={product12}
                  alt="product1"
                  className="w-[150px] md:w-[270px] md:p-3 p-2 "
                  onClick={() => openModal(images[3])}
                />
              </div>
              <div className="product relative  w-[90%] border border-r-0 border-black md:p-3 p-2 rounded-s-3xl  -mt-[1px] md:-mt-[.5px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product13}
                  alt="product1"
                  className="w-[150px] md:w-[270px] "
                  onClick={() => openModal(images[4])}
                />{" "}
                <span className="font-dmRegular text-sm  md:text-2xl text-nowrap">
                  Double Side Photo <br /> Frame Two in One
                </span>
              </div>
              <div className="product relative ml-auto w-[90%] md:rounded-e-[2rem] rounded-e-3xl -mt-[1px] md:-mt-[.5px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl text-nowrap text-right">
                  A Unique Glass Ashtray
                </span>
                <div className="relative">
                  <img
                    src={product14}
                    alt="product1"
                    className="w-[150px] md:w-[270px] border border-l-0 border-black md:p-3 p-2 rounded-e-2xl md:rounded-e-3xl "
                    onClick={() => openModal(images[5])}
                  />
                  <img
                    src={sunrays}
                    alt=""
                    className="absolute size-7 md:size-10 -bottom-[.9rem]  md:-bottom-[1.30rem] md:left-[0%] left-[0%] translate-x-[-50%] scale-x-[-1]"
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
  );
};
export default GiftPage;
