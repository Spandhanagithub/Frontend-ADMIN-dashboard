// Message.js

import React, { useState } from 'react';
import styles from './Message.module.css';

const Message = () => {
  const [selectedOption, setSelectedOption] = useState('Send to All');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedClients, setSelectedClients] = useState([]);
  const [message, setMessage] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const handleClientChange = (event) => {
    const options = event.target.options;
    const selectedClients = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedClients.push(options[i].value);
      }
    }
    setSelectedClients(selectedClients);
  };

  const sendMessage = () => {
    // Here you can implement the logic to send the message based on the selected option
    console.log('Sending message:', message);
    console.log('Selected option:', selectedOption);
    console.log('Selected country:', selectedCountry);
    console.log('Selected clients:', selectedClients);
  };

  return (
    <div className={styles.messageContainer}>
      <h2>Message Feature</h2>
      <div className={styles.optionContainer}>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="Send to All">Send to All</option>
          <option value="Send as per Country">Send as per Country</option>
          <option value="Send to Individual">Send to Individual</option>
        </select>
      </div>

      {selectedOption === 'Send as per Country' && (
        <div className={styles.countryContainer}>
          <select value={selectedCountry} onChange={handleCountryChange}>
            <option value="">Select Country</option>
            <optgroup label="Asia Pacific">
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="UAE">UAE</option>
              <option value="Thailand">Thailand</option>
              <option value="Singapore">Singapore</option>
              <option value="Hong Kong">Hong Kong</option>
            </optgroup>
            <optgroup label="Europe">
              <option value="United Kingdom">United Kingdom</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Ireland">Ireland</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Poland">Poland</option>
              <option value="Belgium">Belgium</option>
              <option value="Portugal">Portugal</option>
              <option value="Spain">Spain</option>
              <option value="Slovakia">Slovakia</option>
              <option value="Greece">Greece</option>
              <option value="Austria">Austria</option>
              <option value="Hungary">Hungary</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Serbia">Serbia</option>
              <option value="Denmark">Denmark</option>
              <option value="Sweden">Sweden</option>
              <option value="Norway">Norway</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Romania">Romania</option>
            </optgroup>
            <optgroup label="North America">
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
            </optgroup>
          </select>
        </div>
      )}

      {selectedOption === 'Send to Individual' && (
        <div className={styles.clientContainer}>
          <select multiple onChange={handleClientChange}>
            <option value="Name of Client 1">Name of Client 1</option>
            <option value="Name of Client 2">Name of Client 2</option>
            <option value="Name of Client 3">Name of Client 3</option>
            <option value="Name of Client 4">Name of Client 4</option>
          </select>
        </div>
      )}

      <div className={styles.messageInput}>
        <textarea
          placeholder="Type message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button className={styles.messageButton} onClick={sendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default Message;
