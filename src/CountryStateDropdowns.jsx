import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryStateDropdowns = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  const GEO_NAMES_USERNAME = "YOUR_GEONAMES_USERNAME"; // Replace with your GeoNames username

  useEffect(() => {
    // Fetch countries from API
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      // Fetch states based on selected country
      axios
        .get(
          `http://api.geonames.org/administrativeDivisionsJSON?country=${selectedCountry}&username=${GEO_NAMES_USERNAME}`
        )
        .then((response) => {
          setStates(response.data.adminCodes1 || []);
        })
        .catch((error) => console.error("Error fetching states:", error));
    } else {
      setStates([]);
    }
  }, [selectedCountry]);

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedState(""); // Reset state when country changes
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-700"
        >
          Country:
        </label>
        <select
          id="country"
          value={selectedCountry}
          onChange={handleCountryChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.cca2} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700"
        >
          State:
        </label>
        <select
          id="state"
          value={selectedState}
          onChange={handleStateChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          disabled={!selectedCountry}
        >
          <option value="">Select a state</option>
          {states.length > 0 ? (
            states.map((state, index) => (
              <option key={index} value={state.code}>
                {state.name}
              </option>
            ))
          ) : (
            <option value="">No states available</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default CountryStateDropdowns;
