import React from 'react';
import './styles/dashboard.css';


const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Attendance Dashboard</h2>
      <div className="attendance-status">
        <h3 className="status-heading">Your Attendance Status:</h3>
        <p className="status-text">Present</p>
      </div>
      <div className="class-selection">
        <h3 className="selection-heading">Select Class:</h3>
        <select className="class-select">
          <option value="class1">Class 1</option>
          <option value="class2">Class 2</option>
          <option value="class3">Class 3</option>
        </select>
      </div>
      <button className="mark-attendance-button">Mark Attendance</button>
      <button className="view-history-button">View Attendance History</button>
    </div>
  );
};

export default Dashboard;
