import React from 'react';
import { CSVLink } from 'react-csv';

const DataLeakTable = ({ data }) => {
  const headers = [
    { label: 'Date', key: 'date' },
    { label: 'Leakage Percentage', key: 'leakage' },
  ];

  return (
    <div>
      <h3>Leakage Data</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Leakage Percentage</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.leakage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CSVLink data={data} headers={headers} filename={"leakage-data.csv"}>
        Export as CSV
      </CSVLink>
    </div>
  );
};

export default DataLeakTable;
