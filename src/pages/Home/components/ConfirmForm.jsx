import React from "react";
import PopupComponent from "../../../components/PopupComponent";

const ConfirmForm = ({ city, handleClose, handleConfirm }) => (
  <PopupComponent>
    <div className="relative bg-alfaBlack p-6 rounded-lg max-w-md w-full mx-4 md:min-w-[700px] z-50 py-14">
      <h3 className="text-lg mb-8 text-center text-alfaWhite ">
        Confirmation de votre ville, pour la récupération de votre véhicule :
      </h3>

      <div className="flex justify-center mb-8">
        <div className="w-[250px] h-[50px] bg-alfaBlack p-2 rounded-full border-2 flex items-center j text-alfaWhite ">
          <p className="font-bold text-left pl-4">
            {city.name} {city.code}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-4 md:mt-4">
        <button
          onClick={handleClose}
          className="w-[210px] h-[56px] text-[20px] bg-alfaWhite  hover:bg-alfaWhiteSmoke px-4 py-2 rounded-[20px] font-bold text-alfaBlack uppercase transition-colors duration-300"
        >
          Modifier
        </button>
        <button
          onClick={handleConfirm}
          className="w-[210px] h-[56px] text-[20px] bg-alfaRed hover:bg-alfaRedDark px-4 py-2 rounded-[20px] font-bold text-alfaWhite uppercase transition-colors duration-300"
        >
          Confirmer
        </button>
      </div>
    </div>
  </PopupComponent>
);

export default ConfirmForm;
