import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-100" >
      <div className="bg-white p-5 rounded-lg">
        {children}
        <button onClick={onClose} className="mt-5 bg-blue-500 text-white p-2 rounded-lg">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;