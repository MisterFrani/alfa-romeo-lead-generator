import React from "react";

const ButtonOptionComponent = ({ label, onClick }) => (
  <button
    className="w-full md:w-[450px] h-[50px] bg-alfaBlack hover:bg-alfaRed rounded-full text-left px-8 mb-6 uppercase transition-colors duration-300"
    onClick={onClick}
  >
    {label}
  </button>
);

export default ButtonOptionComponent;
