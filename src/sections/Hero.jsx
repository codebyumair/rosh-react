import React, { useState } from "react";

// Sample data for demonstration
const images = [
  {
    id: 1,
    src: "https://placehold.co/200x200?text=Single+Image",
    additionalImages: [],
  },
  {
    id: 2,
    src: "https://placehold.co/200x200?text=Main+Image",
    additionalImages: [
      "https://placehold.co/100x100?text=Image+1",
      "https://placehold.co/100x100?text=Image+2",
      "https://placehold.co/100x100?text=Image+3",
    ],
  },
];

const Hero = () => {
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

  return (
    <div className="h-screen flex items-center justify-center">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.src}
          alt=""
          onClick={() => openModal(image)}
          className="w-24 h-24 cursor-pointer m-2"
        />
      ))}

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-md relative max-w-lg">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600"
            >
              Close
            </button>
            <img src={mainImage} alt="" className="w-full h-auto mb-4" />

            {selectedImage.additionalImages.length > 0 && (
              <div className="flex space-x-2">
                {selectedImage.additionalImages.map((thumbnail, index) => (
                  <img
                    key={index}
                    src={thumbnail}
                    alt=""
                    onClick={() => handleThumbnailClick(thumbnail)}
                    className="w-16 h-16 cursor-pointer border border-gray-300"
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

export default Hero;
