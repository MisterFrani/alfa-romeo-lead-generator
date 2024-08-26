import React from "react";

const SuccessMessageWidget = ({ children }) => (
  <div className="min-h-[470px] md:min-h-[520px]">
    <div
      className="sm:text-lg md:text-xl  bg-[#5B4747] bg-opacity-[0.1] backdrop-filter backdrop-blur-lg text-alfaWhite px-6 py-14 max-w-md md:min-w-[618px] rounded-lg 
  min-h-[400px] "
    >
      {children}

    </div>
  </div>
);

export default SuccessMessageWidget;
