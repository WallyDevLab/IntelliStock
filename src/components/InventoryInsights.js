import React from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';

const InventoryInsights = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <PieChart>
      <Pie dataKey="quantity" isAnimationActive={false} data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>
);

export default InventoryInsights;
