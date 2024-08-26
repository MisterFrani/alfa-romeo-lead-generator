import React from "react";
import TitleWidget from "../TitleWidget";
import ButtonOptionComponent from "./ButtonOptionComponent";

const FormSelectionCard = ({ data, handleSelection, currentStep }) => (
  <div>
    <div className="md:w-[439px]">
      <TitleWidget title={data.title} />
    </div>

    {data.options.map((option, index) => (
      <ButtonOptionComponent
        key={index}
        label={option.label}
        onClick={() => handleSelection(data.key, option, currentStep)}
      />
    ))}
  </div>
);

export default FormSelectionCard;
