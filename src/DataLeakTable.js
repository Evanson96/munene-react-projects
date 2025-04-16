import React from 'react';
import './DataLeakTable.css';

function DataLeakTable({ leaks }) {
  return (
    <div className="leak-container">
      <h2>Data Leakage Detection System</h2>
      <table>
        <thead>
          <tr>
            <th>Leak Type</th>
            <th>Severity Level</th>
            <th>Date of Breach</th>
          </tr>
        </thead>
        <tbody>
          {leaks.map((leak) => (
            <tr key={leak.id} className={`level-${leak.level.toLowerCase()}`}>
              <td>{leak.leak}</td>
              <td>{leak.level}</td>
              <td>{leak.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataLeakTable;
