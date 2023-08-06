import React from 'react';
import ReactCountryFlag from "react-country-flag";
import './Georestrictions.css';

function Georestrictions({ georestrictions }) {
  const blacklist = georestrictions[0].blacklist;

  return (
    <div className="geo-container">
      {blacklist.map((country, index) => (
        <div key={index} className="geo-item">
          <ReactCountryFlag countryCode={country.code} svg />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Georestrictions;
