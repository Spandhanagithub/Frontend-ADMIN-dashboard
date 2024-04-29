import React, { useState } from 'react';
import styles from './History.module.css';
import Table from './Table';

const History = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [clientName, setClientName] = useState("");

  const countriesByContinent = {
    'Asia Pacific': ['India', 'Australia','New zealand' , 'UAE', "Thailand", "Singapore", "Hong Kong"],
    Europe: ['United Kingdom', 'Germany', 'France', 'Italy', 'Netherlands', 'Ireland', 'Switzerland', 'Poland', 'Belgium', 'Portugal', 'Spain', 'Slovakia', 'Greece', 'Austria', 'Hungary', 'Czech Republic', 'Serbia', 'Denmark', 'Sweden', 'Norway', 'Lithuania', 'Romania'],
    'North America': ['United States', 'Canada']
  };

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setSelectedRegion(selectedRegion);
    setSelectedCountry(""); // Reset selected country when region changes
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);
    fetchClientName(selectedCountry);
  };

  const fetchClientName = (country) => {
    switch (country) {
      case "India":
        setClientName("Client Name for India");
        break;
      case "China":
        setClientName("Client Name for China");
        break;
      default:
        setClientName("");
    }
  };

  return (
    <div className={styles.containerHistory}>
      <div className={styles.regionSelector}>
        <label htmlFor="region">Select Region:</label>
        <select id="region" value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select Region</option>
          <option value="Asia Pacific">Asia Pacific</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
        </select>
      </div>
      <div className={styles.countrySelector}>
        {selectedRegion && (
          <>
            <label htmlFor="country">Select Country:</label>
            <select id="country" value={selectedCountry} onChange={handleCountryChange}>
              <option value="">Select Country</option>
              {countriesByContinent[selectedRegion].map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </>
        )}
      </div>
      {selectedCountry && <div className={styles.clientName}>Client Name: {clientName}</div>}
      <div className={styles.tableContainer}>
        <Table />
      </div>
    </div>
  );
};

export default History;
