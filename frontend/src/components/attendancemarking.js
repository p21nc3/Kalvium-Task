import React from 'react';
import './src/styles/attendancemarking.css';

const AttendanceMarking = () => {
  return (
    <div className="attendance-marking-container">
      <h2 className="attendance-marking-heading">Mark Attendance</h2>
      <div className="attendance-options">
        <label htmlFor="present" className="attendance-option">
          <input type="radio" id="present" name="attendance" value="present" />
          Present
        </label>
        <label htmlFor="absent" className="attendance-option">
          <input type="radio" id="absent" name="attendance" value="absent" />
          Absent
        </label>
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
};

export default AttendanceMarking;
