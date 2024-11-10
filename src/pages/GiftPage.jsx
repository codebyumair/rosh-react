import product10 from "../assets/products/Fusioned-glass-map-of-Indian.png";
import product11 from "../assets/products/Om-Table-show-piece.png";
import product12 from "../assets/products/A-unique-glass-Ashtray.png";
import product13 from "../assets/products/Double-side-photo-frame-two-in-one.png";
import sunrays from "../assets/icons/sunrays.svg";
import Footer from "../components/Footer";
import { productImages } from "../data/products";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";

const images = [
  {
    id: 1,
    src: productImages[9],
    additionalImages: [],
  },
  {
    id: 2,
    src: productImages[10],
    additionalImages: [],
  },
  {
    id: 3,
    src: productImages[11],
    additionalImages: [],
  },
  {
    id: 4,
    src: productImages[12],
    additionalImages: [productImages[12], productImages[13]],
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
        <h2 className="font-dmRegular md:text-4xl text-center mb-16">
          Fusion Glass Showpiece
        </h2>
        <div className="container mx-auto">
          <div className="row">
            <div className="products w-full">
              <div className="product relative w-[90%] md:w-[90%] md:rounded-s-[2rem] rounded-s-3xl flex items-center justify-start md:gap-5 gap-3">
                <div className="relative">
                  <img
                    src={sunrays}
                    alt=""
                    className="absolute size-7 md:size-10 -top-[.9rem]  md:-top-[1.30rem] md:left-[100%]  left-[105%] translate-x-[-50%]"
                  />
                  <img
                    src={product10}
                    alt="product1"
                    className="w-[140px] md:w-[270px] border border-r-0 border-black md:p-3 p-2 rounded-s-3xl "
                    onClick={() => openModal(images[0])}
                  />
                </div>
                <span className="font-dmRegular text-sm  md:text-2xl text-left text-nowrap">
                  Fusioned glass <br className="md:hidden inline-flex" /> map of
                  Indian
                </span>
              </div>
              <div className="product border border-l-0 border-black ml-auto w-[90%] md:w-[90%] md:rounded-e-[2rem] rounded-e-3xl -mt-[.9px] md:-mt-[1px] flex items-center justify-end md:gap-5 gap-3">
                <span
                  className="font-dmRegular text-sm  text-right md:text-2xl text-nowrap
              "
                >
                  Om Table <br className="md:hidden" /> Showpiece
                </span>
                <img
                  src={product11}
                  alt="product1"
                  className="w-[140px] md:w-[270px] md:p-3 p-2 "
                  onClick={() => openModal(images[1])}
                />
              </div>
              <div className="product border border-r-0 border-black w-[90%] md:rounded-s-[2rem] rounded-s-3xl -mt-[1px] flex items-center justify-start md:gap-5 gap-3">
                <img
                  src={product12}
                  alt="product1"
                  className="w-[140px] md:w-[270px] md:p-3 p-2 "
                  onClick={() => openModal(images[2])}
                />
                <span className="font-dmRegular text-sm  md:text-2xl text-left text-nowrap">
                  A unique <br className="md:hidden" /> glass Ashtray
                </span>
              </div>
              <div className="product relative ml-auto w-[90%] md:rounded-e-[2rem] rounded-e-3xl -mt-[.9px] md:-mt-[.8px] flex items-center justify-end md:gap-5 gap-3">
                <span className="font-dmRegular text-sm  md:text-2xl text-nowrap text-right">
                  Double side photo <br /> frame two in one
                </span>
                <div className="relative">
                  <img
                    src={product13}
                    alt="product1"
                    className="w-[140px] md:w-[270px] border border-l-0 border-black md:p-3 p-2 rounded-e-3xl "
                    onClick={() => openModal(images[3])}
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
