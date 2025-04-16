import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line, CartesianGrid, ResponsiveContainer } from 'recharts';
import './App.css';

const initialData = [
  { id: 1, system: "Email Server", status: "Secure", date: "2025-04-15", leakScore: 20 },
  { id: 2, system: "Cloud Storage", status: "Vulnerable", date: "2025-04-14", leakScore: 80 },
  { id: 3, system: "User Database", status: "Secure", date: "2025-04-13", leakScore: 10 },
  { id: 4, system: "Payment Gateway", status: "Critical", date: "2025-04-10", leakScore: 95 }
];

function App() {
  const [data] = useState(initialData);

  return (
    <div className="App">
      <h1>Data Leakage Detection System</h1>
      
      <CSVLink data={data} filename={"data-leakage-report.csv"}>
        <button className="download-btn">Download Report</button>
      </CSVLink>

      <h2>Leakage Table Overview</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>System</th>
            <th>Status</th>
            <th>Date</th>
            <th>Leak Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.system}</td>
              <td>{row.status}</td>
              <td>{row.date}</td>
              <td>{row.leakScore}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Leak Score Bar Chart</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="system" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="leakScore" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      <h2>Leak Score Trend Line</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke="#ccc" />
          <Line type="monotone" dataKey="leakScore" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default App;
