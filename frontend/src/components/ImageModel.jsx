import React from 'react';

const ImageModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <div className="relative max-h-screen w-full overflow-auto p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 bg-gray-800 rounded-full text-3xl text-white font-bold hover:bg-gray-700"
        >
          &times;
        </button>
        <img src={image} alt="Zoomed Preview" className="mx-auto object-contain" />
      </div>
    </div>
  );
};

export default ImageModal;
