import React from "react";
import { CountryDropdown } from "react-country-region-selector";

const Example = ({ formData, handleChange }) => {
  return (
    <div className="space-y-2">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <CountryDropdown
          value={formData.Country}
          onChange={(val) =>
            handleChange({ target: { name: "Country", value: val } })
          }
          className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
        />
      </div>
    </div>
  );
};

export default Example;
