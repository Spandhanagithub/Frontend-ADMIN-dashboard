import React, { useState, useEffect } from 'react';
import styles from './Pending.module.css';

const ServiceRequestForm = () => {
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [pendingServiceRequests, setPendingServiceRequests] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const [isMessageSent, setMessageSent] = useState(false);

  const countriesByContinent = {
    'Asia Pacific': ['India', 'Australia','New zealand' , 'UAE', "Thailand", "Singapore", "Hong Kong"],
    Europe: ['United Kingdom', 'Germany', 'France', 'Italy', 'Netherlands', 'Ireland', 'Switzerland', 'Poland', 'Belgium', 'Portugal', 'Spain', 'Slovakia', 'Greece', 'Austria', 'Hungary', 'Czech Republic', 'Serbia', 'Denmark', 'Sweden', 'Norway', 'Lithuania', 'Romania'],
    'North America': ['United States', 'Canada']
  };

  const pendingServiceRequestsData = [
    {
      id: '1',
      region: 'Asia Pacific',
      customerName: 'John Doe',
      address: '123 Main St, City, Country',
      serviceType: 'Electrical',
      problem: 'Lights not working',
      timeSlot: 'Morning',
      message: 'Message 1',
    },
    {
      id: '2',
      region: 'North America',
      customerName: 'Jane Smith',
      address: '456 Oak St, Town, Country',
      serviceType: 'Plumbing',
      problem: 'Leaky faucet',
      timeSlot: 'Afternoon',
      message: 'Message 2',
    },
    {
      id: '3',
      region: 'Europe',
      customerName: 'Maria Garcia',
      address: '789 Elm St, Village, Country',
      serviceType: 'HVAC',
      problem: 'Air conditioning not working',
      timeSlot: 'Evening',
      message: 'Message 3',
    },
    {
      id: '4',
      region: 'Europe',
      customerName: 'David Lee',
      address: '101 Pine St, Hamlet, Country',
      serviceType: 'Plumbing',
      problem: 'Clogged drain',
      timeSlot: 'Morning',
      message: 'Message 4',
    },
  ];

  const filterServiceRequestsByRegion = (region) => {
    const filteredRequests = pendingServiceRequestsData.filter((request) => request.region === region);
    setPendingServiceRequests(filteredRequests);
  };

  const handleRegionChange = (e) => {
    setSelectedRegion(e.target.value);
    setSelectedCountry('');
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  useEffect(() => {
    if (selectedRegion !== '') {
      filterServiceRequestsByRegion(selectedRegion);
    }
  }, [selectedRegion]);

  const handleMessageSend = () => {
    if (messageType === '') {
      return;
    }

    console.log(`Message sent: ${message}`);
    setMessage('');
    setMessageSent(true);

    setTimeout(() => setMessageSent(false), 3000);
  };

  return (
    <div className={styles.containermsg}>
      <div className={styles['select-region']}>
        <label htmlFor="region">Select Region:</label>
        <select id="regionpending" value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select Region</option>
          {Object.keys(countriesByContinent).map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>
      <div className={styles['select-country']}>
        <label htmlFor="country">Select Country:</label>
        <select id="countrypending" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {selectedRegion && countriesByContinent[selectedRegion].map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
      </div>
      <div className={styles.pendingServiceRequests}>
        <p className={styles.paragraph}>Pending Service Requests for {selectedRegion}</p>
        <select className={styles.selecto} value={selectedServiceId} onChange={(e) => setSelectedServiceId(e.target.value)}>
          <option value="">Select Service Request</option>
          {pendingServiceRequests.map((request) => (
            <option key={request.id} value={request.id}>{`Service ID: ${request.id}, Customer: ${request.customerName}`}</option>
          ))}
        </select>
        {selectedServiceId && (
          <div className={styles.serviceRequestDetails}>
            {pendingServiceRequests.map((request) => {
              if (request.id === selectedServiceId) {
                return (
                  <div key={request.id} className={styles.serviceRequest}>
                    <div>Name of Customer: {request.customerName}</div>
                    <div>Address: {request.address}</div>
                    <div>Service Type: {request.serviceType}</div>
                    <div>Problem: {request.problem}</div>
                    <div>Preferred Time Slot: {request.timeSlot}</div>
                    <div>Message: {request.message}</div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceRequestForm;
