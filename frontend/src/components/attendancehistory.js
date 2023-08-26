import React from 'react';
import './styles/attendancehistory.css';

const AttendanceHistory = () => {
  return (
    <div className="attendance-history-container">
      <h2 className="attendance-history-heading">Attendance History</h2>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Class</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Class 1</td>
            <td>August 1, 2023</td>
            <td>Present</td>
          </tr>
          <tr>
            <td>Class 2</td>
            <td>August 2, 2023</td>
            <td>Absent</td>
          </tr>
          <tr>
            <td>Class 3</td>
            <td>August 3, 2023</td>
            <td>Present</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceHistory;
