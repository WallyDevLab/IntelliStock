import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PriceRecommendation = ({ data }) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="product_name" />
      <YAxis dataKey="sales" />
      <Tooltip />
      <Legend />
      <Bar dataKey="sales" fill="#82ca9d" />
    </BarChart>
  </ResponsiveContainer>
);

export default PriceRecommendation;
