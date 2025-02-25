import React, { useEffect } from "react";


const Modal= ({ onClose }) => {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg w-[700px] h-[400px] relative z-50 flex flex-col items-center justify-center">
      <button className="absolute top-4 right-4 text-gray-500 text-xl" onClick={onClose}>
        ✖
      </button>
      <h2 className="text-3xl font-semibold text-center text-red-500">Coming Soon</h2>
    </div>
  </div>
  );
};

export default Modal;
