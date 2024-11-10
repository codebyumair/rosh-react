import product1 from "../assets/products/In-a-washroom-mirror.png";
import product2 from "../assets/products/Wall-hanging-beautiful-glass-lady.png";
import product3 from "../assets/products/For-wall-Hanging-Krishna.png";
import product4 from "../assets/products/INTERNATIONAL-SCHOOL-OF-ANCIENT-WISDOM.png";
import product5 from "../assets/products/Stained-glass-ceiling-in-conference-room.png";
import product6 from "../assets/products/A-thick-glass-mural.png";
import product7 from "../assets/products/A-kitchen-wall-made-by-fused-glass.png";
import product8 from "../assets/products/Tagged-glass-partition-between-living-room-and-dining.png";
import product9 from "../assets/products/A-glass-partition-panel-in-Reception-area.png";
import sunrays from "../assets/icons/sunrays.svg";
import Footer from "../components/Footer";
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
        <h2 className="font-dmRegular md:text-4xl text-center mb-16">
          Interiors In Stained Glass
        </h2>
        <div className="container mx-auto">
          <div className="row">
            <div className="products w-full">
              <div className="product relative border border-0 border-black w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 flex items-center justify-start md:gap-5 gap-3">
                <div className="relative">
                  <img
                    src={sunrays}
                    alt=""
                    className="absolute size-7 md:size-10 -top-[.9rem]  md:-top-[1.30rem] md:left-[100%] left-[105%] translate-x-[-50%] "
                  />
                  <img
                    src={product1}
                    alt="product1"
                    className="w-[140px] md:w-[270px] border border-r-0 border-black md:p-3 p-2 rounded-s-3xl "
                    onClick={() => openModal(images[0])}
                  />
                </div>
                <span className="font-dmRegular text-sm  text-nowrap md:text-wrap md:text-2xl">
                  In a washroom mirror
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-fit md:w-[90%] md:rounded-e-[2rem]  rounded-e-3xl -mt-[9px] md:-mt-[12.5px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl md:text-wrap text-nowrap text-right">
                  Wall hanging <br /> beautiful glass lady
                </span>
                <img
                  src={product2}
                  alt="product1"
                  className="w-[140px] md:w-[270px] md:p-3 p-2"
                  onClick={() => openModal(images[1])}
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product3}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                  onClick={() => openModal(images[2])}
                />
                <span className="font-dmRegular text-sm  md:text-wrap text-nowrap md:text-2xl">
                  For wall <br className="md:hidden inline-block" /> Hanging
                  Krishna
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="hidden md:inline-flex font-dmRegular md:text-2xl text-right">
                  “INTERNATIONAL <br /> SCHOOL OF ANCIENT <br /> WISDOM” A
                  stained glass <br /> mural in a mediation <br /> hall in
                  Bangalore
                </span>
                <span className="md:hidden font-dmRegular text-sm md:text-2xl text-right text-nowrap md:text-wrap">
                  “INTERNATIONAL <br /> SCHOOL OF ANCIENT <br /> WISDOM” A
                  stained glass <br /> mural in a mediation <br /> hall in
                  Bangalore
                </span>
                <img
                  src={product4}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                  onClick={() => openModal(images[3])}
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product5}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                  onClick={() => openModal(images[4])}
                />
                <span className="font-dmRegular text-sm  md:text-2xl text-nowrap md:text-wrap">
                  Stained glass ceiling
                  <br className="md:inline-flex flex" />
                  in conference room
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[50%] md:w-fit md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl text-nowrap">
                  A thick glass mural
                </span>
                <img
                  src={product6}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                  onClick={() => openModal(images[5])}
                />
              </div>
              <div className="product border border-r-0 border-black w-[50%] md:w-fit md:rounded-s-[2rem] rounded-s-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product7}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                  onClick={() => openModal(images[6])}
                />
                <span className="font-dmRegular text-sm  md:text-2xl text-nowrap md:text-wrap">
                  A kitchen wall made <br /> by fused glass
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto  w-[90%] md:rounded-e-[2rem] rounded-e-3xl md:p-3 p-2 -mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl text-right text-nowrap md:text-wrap">
                  Tagged glass partition{" "}
                  <br className="md:hidden inline-flex" />
                  between <br className="hidden md:inline-flex" /> living room
                  <br className="md:hidden inline-flex" /> and dining
                </span>
                <img
                  src={product8}
                  alt="product1"
                  className="w-[140px] md:w-[270px]"
                  onClick={() => openModal(images[7])}
                />
              </div>
              <div className="product relative border border-0 border-black w-fit md:rounded-s-[2rem] rounded-s-3xl -mt-[1px] md:-mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <div className="relative">
                  <img
                    src={product9}
                    alt="product1"
                    className="w-[140px] md:w-[270px] border border-r-0 border-black md:p-3 p-2 rounded-s-3xl"
                    onClick={() => openModal(images[8])}
                  />
                  <img
                    src={sunrays}
                    alt=""
                    className="absolute size-7 md:size-10 -bottom-[.9rem]  md:-bottom-[1.30rem] md:left-[100%] left-[105%] translate-x-[-50%]"
                  />
                </div>

                <span className="font-dmRegular text-sm  md:text-2xl text-nowrap">
                  A glass partition in
                  <br
                    className="
                inline-flex md:hidden"
                  />{" "}
                  <br className="md:inline-flex hidden" />
                  panel Reception area
                </span>
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
            x
            <img
              src={mainImage}
              alt=""
              className={`w-full object-contain ${
                selectedImage.id === 1 || selectedImage.id === 5
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
