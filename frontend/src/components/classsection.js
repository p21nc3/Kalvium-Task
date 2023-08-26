import React from 'react';
import './styles/classselection.css';

const ClassSelection = () => {
  return (
    <div className="class-selection-container">
      <h2 className="class-selection-heading">Select Class</h2>
      <select className="class-select">
        <option value="class1">Class 1</option>
        <option value="class2">Class 2</option>
        <option value="class3">Class 3</option>
      </select>
      <button className="mark-attendance-button">Mark Attendance</button>
    </div>
  );
};

export default ClassSelection;
