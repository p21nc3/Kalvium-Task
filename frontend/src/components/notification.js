import React from 'react';
import './styles/notification.css';

const Notifications = () => {
  return (
    <div className="notifications-container">
      <h2 className="notifications-heading">Notifications</h2>
      <ul className="notifications-list">
        <li className="notification-item">
          <span className="notification-text">Class 1: Upcoming session on August 26, 2023</span>
        </li>
        <li className="notification-item">
          <span className="notification-text">Class 2: Low attendance, please attend regularly</span>
        </li>
        <li className="notification-item">
          <span className="notification-text">Class 3: Session canceled for today</span>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
