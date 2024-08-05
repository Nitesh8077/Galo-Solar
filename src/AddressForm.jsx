import React, { useEffect, useState } from "react";
import axios from "axios";

const AddressForm = () => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Fetch states based on selected country
  useEffect(() => {
    const fetchStates = async () => {
      if (!selectedCountry) return;

      try {
        // Placeholder URL, replace with your API endpoint
        const response = await axios.get(
          `https://api.example.com/states?country=${selectedCountry}`
        );
        setStates(response.data.states);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, [selectedCountry]);

  return (
    <div>
      <div>
        <label htmlFor="country">Country:</label>
        <select
          id="country"
          onChange={(e) => setSelectedCountry(e.target.value)}
          value={selectedCountry}
        >
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.cca3} value={country.cca2}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div>
          <label htmlFor="state">State:</label>
          <select
            id="state"
            onChange={(e) => setSelectedState(e.target.value)}
            value={selectedState}
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default AddressForm;
