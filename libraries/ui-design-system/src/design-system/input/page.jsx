import React from "react";

const FormInput = ({ type, id, step, value, onChange, required }) => {
  const hasError =
    required &&
    ((type === "text" && value.trim() === "") ||
      (type === "number" && value === 0));

  const isValidNumber = type === "number" && Number(value)%1 === 0 && Number(value) >= 0 && value.toString().match(/[-+*/]/g) === null

  return (
    <div>
      <input
        type={type}
        step={step}
        id={id}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        value={value}
        onChange={(event) => onChange(event)}
      />
      {hasError && (
        <div className="text-xs">
          <span>This field is required. </span>
        </div>
      )}
      {type === "number" && !isValidNumber && (<div className="text-xs">
          <span>Enter a positive and non-decimal number.</span>
        </div>)}
    </div>
  );
};

export default FormInput;
