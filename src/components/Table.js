import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './table.module.css'; // Import CSS module

function App() {
  const [serviceType, setServiceType] = useState('');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const handleServiceTypeChange = (event) => {
    setServiceType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted');
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('your-api-endpoint-here');
      setTableData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Table
      serviceType={serviceType}
      handleServiceTypeChange={handleServiceTypeChange}
      tableData={tableData}
      handleSubmit={handleSubmit}
    />
  );
}

function Table({ serviceType, handleServiceTypeChange, tableData, handleSubmit }) {
  return (
    <div className={styles['form-section']}>
      <div className={styles.box}>
        <label htmlFor="serviceType">Service Type:</label>
        <select className={styles.serviceType} value={serviceType} onChange={handleServiceTypeChange}>
          <option value="">Select Service Type</option>
          <option value="Electrical">Electrical</option>
          <option value="Carpenter">Carpenter</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Computer">Computer</option>
          <option value="Cleaning">Cleaning</option>
        </select>
      </div>

      <div className={styles.boxww}>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td><strong>Date:</strong></td>
                <td>12/02/2021</td>
              </tr>
              <tr>
                <td><strong>Time:</strong></td>
                <td>04:30 pm</td>
              </tr>
              <tr>
                <td><strong>Maintenance Engineer:</strong></td>
                <td>Avinash Sharma</td>
              </tr>
              <tr>
                <td><strong>Problem Fixed:</strong></td>
                <td>Repaired Lamp and fixed wire of kitchen switch board</td>
              </tr>
            </tbody>
          </table>
          <div className={styles.submiss}>
            <button className={styles.cls} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
