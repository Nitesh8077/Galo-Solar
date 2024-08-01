import React, { useState } from "react";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

function CSC() {
  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  return (
    <div>
      <h6>Country</h6>
      <CountrySelect
        onChange={(e) => {
          setCountryId(e.id);
        }}
        placeHolder="Select Country"
      />
      <h6>State</h6>
      <StateSelect
        countryid={countryId}
        onChange={(e) => {
          setStateId(e.id);
        }}
        placeHolder="Select State"
      />
      <h6>City</h6>
      <CitySelect
        countryid={countryId}
        stateid={stateId}
        onChange={(e) => {
          console.log(e);
        }}
        placeHolder="Select City"
      />
    </div>
  );
}

export default CSC;
