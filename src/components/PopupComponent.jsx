import React from "react";

const PopupComponent = ({ children }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="fixed inset-0 bg-alfaBlack  bg-opacity-[0.1] backdrop-filter backdrop-blur-lg"></div>
    {children}
  </div>
);

export default PopupComponent;
