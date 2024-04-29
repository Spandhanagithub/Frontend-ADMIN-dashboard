import React, { useState } from 'react';
import PartnerDashboard from '../components/PartnerDashboard';
import EnterpriseDashboard from '../components/EnterpriseDashboard';
import IndividualDashboard from '../components/IndividualDashboard';
import ServiceTeamDashboard from '../components/ServiceTeamDashboard';
import styles from './dashboard.module.css';

const Dashboard = () => {
  const [openDashboard, setOpenDashboard] = useState(null);

  const handleDashboardClick = (dashboard) => {
    setOpenDashboard(dashboard);
  };

  const openFile = (filePath) => {
    console.log('Opening file:', filePath);
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarMenuItem} onClick={() => openFile('/path/to/partner/file')}>
          Partner Dashboard
        </div>
        <div className={styles.sidebarMenuItem} onClick={() => openFile('/path/to/enterprise/file')}>
          Enterprise Dashboard
        </div>
        <div className={styles.sidebarMenuItem} onClick={() => openFile('/path/to/individual/file')}>
          Individual Dashboard
        </div>
        <div className={styles.sidebarMenuItem} onClick={() => openFile('/path/to/serviceTeam/file')}>
          Service Team Dashboard
        </div>
      </div>
      <div className={styles.dashboardContent}>
        {openDashboard === 'partner' && <PartnerDashboard />}
        {openDashboard === 'enterprise' && <EnterpriseDashboard />}
        {openDashboard === 'individual' && <IndividualDashboard />}
        {openDashboard === 'serviceTeam' && <ServiceTeamDashboard />}
      </div>
    </div>
  );
}

export default Dashboard;
