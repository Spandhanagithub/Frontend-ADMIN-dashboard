import React, { useState, useEffect } from 'react';
import styles from './Customers.module.css';

const Customers = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedClient, setSelectedClient] = useState('');
  const [clients, setClients] = useState([]);
  const [clientDetails, setClientDetails] = useState(null);

  const countriesByContinent = {
    'Asia Pacific': ['India', 'Australia', 'New Zealand', 'UAE', "Thailand", "Singapore", "Hong Kong"],
    Europe: ['United Kingdom', 'Germany', 'France', 'Italy', 'Netherlands', 'Ireland', 'Switzerland', 'Poland', 'Belgium', 'Portugal', 'Spain', 'Slovakia', 'Greece', 'Austria', 'Hungary', 'Czech Republic', 'Serbia', 'Denmark', 'Sweden', 'Norway', 'Lithuania', 'Romania'],
    'North America': ['United States', 'Canada']
  };

  useEffect(() => {
    fetchClientsFromDatabase(selectedCountry);
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedClient) {
      fetchClientDetailsFromDatabase(selectedClient);
    } else {
      setClientDetails(null);
    }
  }, [selectedClient]);

  const fetchClientsFromDatabase = (country) => {
    let clientsData = [];

    switch (country) {
      case 'Asia Pacific':
        clientsData = ['Client 1', 'Client 2', 'Client 3'];
        break;
      case 'North America':
        clientsData = ['Client A', 'Client B', 'Client C'];
        break;
      case 'Europe':
        clientsData = ['Client X', 'Client Y', 'Client Z'];
        break;
      default:
        clientsData = [];
    }

    setClients(clientsData);
  };

  const fetchClientDetailsFromDatabase = (client) => {
    let clientDetailsData = {};

    switch (client) {
      case 'Client 1':
        clientDetailsData = {
          id: 1,
          name: 'Client 1',
          email: 'client1@example.com',
          address: '123 Street, City, Country',
          serviceType: 'Service Type A',
          problem: 'Problem Description',
          preferredTimeSlot: 'Morning',
          message: 'Additional Message or Notes',
        };
        break;
      case 'Client 2':
        clientDetailsData = {
          id: 2,
          name: 'Client 2',
          email: 'client2@example.com',
          address: '456 Avenue, Town, Country',
          serviceType: 'Service Type B',
          problem: 'Another Problem Description',
          preferredTimeSlot: 'Afternoon',
          message: 'Additional Message or Notes',
        };
        break;
      default:
        clientDetailsData = {};
    }

    setClientDetails(clientDetailsData);
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setSelectedCountry('');
    setSelectedClient('');
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedClient('');
  };

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  return (
    <div className={styles.customersContainer}>
      <div className={styles.selectRegion}>
        <label htmlFor="region">Select Region:</label>
        <select id="region" value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select Region</option>
          {Object.keys(countriesByContinent).map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      <div className={styles.selectCountry}>
        <label htmlFor="country">Select Country:</label>
        <select id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {selectedRegion && countriesByContinent[selectedRegion].map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className={styles.selectClient}>
        <label htmlFor="client">Select Client:</label>
        <select id="client" value={selectedClient} onChange={handleClientChange}>
          <option value="">Select Client</option>
          {clients.map((client, index) => (
            <option key={index} value={client}>
              {client}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.clientDetails}>
        {clientDetails && (
          <div>
            <h2>Client Details</h2>
            <p>ID: {clientDetails.id}</p>
            <p>Name: {clientDetails.name}</p>
            <p>Email: {clientDetails.email}</p>
            <p>Address: {clientDetails.address}</p>
            <p>Service Type: {clientDetails.serviceType}</p>
            <p>Problem: {clientDetails.problem}</p>
            <p>Preferred Time Slot: {clientDetails.preferredTimeSlot}</p>
            <p>Message: {clientDetails.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Customers;
