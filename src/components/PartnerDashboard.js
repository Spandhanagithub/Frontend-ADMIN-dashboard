// ServiceRequestForm.js
import React, { useState, Suspense } from 'react';
import styles from './PartnerDashboard.module.css'; // Import CSS module
import image1 from './image/image1.jpg';
const Pending = React.lazy(() => import('./Pending'));
const Message = React.lazy(() => import('./message'));
const Customers = React.lazy(() => import('./Customers'));
const Payments = React.lazy(() => import('./Payments'));
const History = React.lazy(() => import('./History'));

const ServiceRequestForm = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleMenuClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.topNavbar}>
          <div className={styles.logo}>
            <img src={image1} alt="image1" className={styles.myImage} />
          </div>
        </div>
      </div>
      <div className={styles.dashboard}>
        <div className={styles.sidebartwo}>
          <div className={styles.sidebarMenuItem} onClick={() => handleMenuClick('Pending')}>
            Pending Service Request
          </div>
          <div className={styles.sidebarMenuItem} onClick={() => handleMenuClick('message')}>
            Message Feature
          </div>
          <div className={styles.sidebarMenuItem} onClick={() => handleMenuClick('Customers')}>
            List of Customers
          </div>
          <div className={styles.sidebarMenuItem} onClick={() => handleMenuClick('Payments')}>
            Update Payments
          </div>
          <div className={styles.sidebarMenuItem} onClick={() => handleMenuClick('History')}>
            Update Service History
          </div>
        </div>
        <div className={styles.rightContent}>
          <Suspense fallback={<div>Loading...</div>}>
            {selectedComponent && (
              <>
                {selectedComponent === 'Pending' && <Pending />}
                {selectedComponent === 'message' && <Message />}
                {selectedComponent === 'Customers' && <Customers />}
                {selectedComponent === 'Payments' && <Payments />}
                {selectedComponent === 'History' && <History />}
              </>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequestForm;
