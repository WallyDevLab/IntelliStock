import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const InventoryInsights = ({ data }) => {
  const sortedData = [...data].sort((a, b) => b.quantity - a.quantity);
  const topTenData = sortedData.slice(0, 10);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie dataKey="quantity" isAnimationActive={false} data={topTenData} cx="50%" cy="50%" outerRadius={140} fill="#8884d8" label/>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default InventoryInsights;