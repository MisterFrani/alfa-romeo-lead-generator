import React from "react";

const FormInput = ({
  id,
  name,
  type,
  label,
  value,
  onChange,
  error,
  maxLength,
  placeholder,
  wrapperClassName = "",
}) => (
  <div className={`mb-4 ${wrapperClassName}`}>
    <label htmlFor={id} className="block text-sm md:text-lg mb-3 ml-4">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      className={`w-full h-[50px] md:max-w-[250px] bg-alfaBlack p-2 px-5 rounded-full ${
        error ? "border-2 border-alfaRed" : ""
      } placeholder-gray-400`}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      placeholder={placeholder}
    />
  </div>
);

export default FormInput;
