// Modal.js
import React from "react";
import close from "../assets/icons/close.svg";

const Modal = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Handle close when clicking outside the image
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center modal-overlay"
      onClick={handleClickOutside}
    >
      <div className="relative rounded-lg max-w-lg w-full">
        <button
          onClick={onClose}
          className="absolute top-0 -right-10 bg-white rounded-full hover:bg-gray-200"
          style={{ zIndex: 999999 }}
        >
          <img src={close} alt="" />
        </button>

        <img
          src={images[currentIndex]}
          alt={`Gallery image ${currentIndex + 1}`}
          className="w-full"
        />

        {images.length > 1 && (
          <div className="flex justify-between mt-4">
            <button
              onClick={prevImage}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Previous
            </button>
            <button
              onClick={nextImage}
              className="px-3 py-1 bg-gray-200 rounded"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
