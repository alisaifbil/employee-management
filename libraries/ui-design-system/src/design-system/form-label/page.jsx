import React from "react";

const FormLabel = ({ label }) => {
  return (
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
  );
};

export default FormLabel;
