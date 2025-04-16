import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

function LeakChart({ data }) {
  const chartData = [
    { level: 'Critical', count: data.filter(l => l.level === 'Critical').length },
    { level: 'High', count: data.filter(l => l.level === 'High').length },
    { level: 'Medium', count: data.filter(l => l.level === 'Medium').length }
  ];

  return (
    <BarChart width={500} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="level" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
}

export default LeakChart;
