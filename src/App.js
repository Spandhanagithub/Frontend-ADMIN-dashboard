// App.js

import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './components/AdminLog';
import Dashboards from './components/PartnerDashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform login logic, e.g., validate credentials
    // For simplicity, just setting isLoggedIn to true
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <Router>
        {isLoggedIn ? (
          <Dashboards />
        ) : (
          <LoginPage onLogin={handleLogin} />
        )}
      </Router>
    </div>
  );
}

export default App;
