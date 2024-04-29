import React, { useState } from 'react';
import styles from './Payments.module.css';

const Payments = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  const [invoiceFile, setInvoiceFile] = useState(null);

  const handleRegionChange = (event) => {
    const region = event.target.value;
    setSelectedRegion(region);
    setSelectedCountry('');
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedClient('');
  };

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setInvoiceFile(file);
  };

  const handleUpdate = () => {
    console.log('Update button clicked');
  };

  const countriesByContinent = {
    'Asia Pacific': ['India', 'Australia','New Zealand' ,'UAE', "Thailand", "Singapore", "Hong Kong"],
    Europe: ["United Kingdom", "Germany", "France", "Italy", "Netherlands", "Ireland", "Switzerland", "Poland", "Belgium", "Portugal", "Spain", "Slovakia", "Greece", "Austria", "Hungary", "Czech Republic", "Serbia", "Denmark", "Sweden", "Norway", "Lithuania", "Romania"],
    "North America": ['United States', 'Canada']
  };

  return (
    <div className={styles['payments-container']}>
      <div className={styles['select-region']}>
        <label htmlFor="region">Select Region:</label>
        <select id="region" value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select</option>
          <option value="Asia Pacific">Asia Pacific</option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
        </select>
      </div>
      {selectedRegion && (
        <div className={styles['select-country']}>
          <label htmlFor="country">Select Country:</label>
          <select id="country" value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select</option>
            {countriesByContinent[selectedRegion].map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </div>
      )}
      {selectedCountry && (
        <div className={styles['select-client']}>
          <label htmlFor="client">Name of Client:</label>
          <select id="client" value={selectedClient} onChange={handleClientChange}>
            <option value="">Select</option>
            <option value="Client 1">Client 1</option>
            <option value="Client 2">Client 2</option>
            <option value="Client 3">Client 3</option>
          </select>
        </div>
      )}
      <div className={styles['upload-invoice']}>
        <label htmlFor="invoice">Upload Invoice PDF:</label>
        <input type="file" id="invoice" onChange={handleFileChange} accept=".pdf" />
      </div>
      <button className={styles['update-button']} onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default Payments;
