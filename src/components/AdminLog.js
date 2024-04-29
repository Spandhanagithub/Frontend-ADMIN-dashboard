import React, { useState } from 'react';
import image1 from './image/image1.jpg';
import styles from './AdminLog.module.css';

const AdminLog = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    onLogin();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
    setIsFormValid(email.trim() !== '' && password.trim() !== '');
  };

  return (
    <div className={styles.adminlogContainer}>
      <div className={styles.adminlogInner}>
        <div>
          <img src={image1} alt="image1" className={styles.adminlogImage} />
          <div className={styles.adminlogForm}>
            <h2 className={styles.adminlogTitle}>Admin Login</h2>
            <div className={styles.adminlogInputGroup}>
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.adminlogInputGroup}>
              <label>Password*</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.adminlogInputGroup1}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className={styles.adminlogRemember}>Remember Me</label>
            </div>
            <div className={styles.adminlogActions}>
              <button onClick={handleLogin} disabled={!isFormValid}>Login</button>
            </div>
            <div className={styles.adminlogActions1}>
              <span className={styles.adminlogForgetPassword}>Forget Password?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLog;
