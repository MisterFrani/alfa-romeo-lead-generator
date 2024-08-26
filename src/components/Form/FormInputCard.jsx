import React from "react";
import InputComponent from "./InputComponent";
import TitleWidget from "../TitleWidget";

const FormInputCard = ({ data, handleInputChange, errors }) => {
  return (
    <div>
      <TitleWidget title={data.title} />
      <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
        {data.options.map((option, index) => (
          <InputComponent
            key={index}
            id={option.value}
            name={option.value}
            type={option.type}
            label={option.label}
            value={option.defaultValue}
            onChange={handleInputChange}
            error={errors[option.value]}
            maxLength={option.maxLength ?? undefined}
            wrapperClassName={option.className ?? ""}
            placeholder={option.placeholder}
          />
        ))}
      </div>
    </div>
  );
};

export default FormInputCard;
