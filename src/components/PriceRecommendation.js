/**
 * Import necessary dependencies
 */
import React from 'react';
import {
  BarChart, // Bar chart component
  Bar, // Bar component
  XAxis, // X-axis component
  YAxis, // Y-axis component
  CartesianGrid, // Grid component
  Tooltip, // Tooltip component
  Legend, // Legend component
  ResponsiveContainer // Responsive container component
} from 'recharts';

/**
 * PriceRecommendation component
 * @param {Object} props - component props
 * @param {Array} props.data - chart data
 * @returns {JSX.Element} - chart component
 */
const PriceRecommendation = ({ data }) => (
  /**
   * Responsive container to render the chart
   */
  <ResponsiveContainer width="100%" height={300}>
    /**
     * Bar chart component
     */
    <BarChart data={data}>
      /**
       * Grid component with dashed lines
       */
      <CartesianGrid strokeDasharray="3 3" />
      /**
       * X-axis component with product name as the data key
       */
      <XAxis dataKey="product_name" />
      /**
       * Y-axis component with sales as the data key
       */
      <YAxis dataKey="sales" />
      /**
       * Tooltip component to display data on hover
       */
      <Tooltip />
      /**
       * Legend component to display chart legend
       */
      <Legend />
      /**
       * Bar component with sales as the data key and a blue fill color
       */
      <Bar dataKey="sales" fill="#000080" />
    </BarChart>
  </ResponsiveContainer>
);

export default PriceRecommendation;