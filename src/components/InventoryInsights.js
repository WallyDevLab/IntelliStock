/**
 * Import necessary dependencies
 */
import React from 'react';
import {
  PieChart, // Pie chart component
  Pie, // Pie component
  Tooltip, // Tooltip component
  ResponsiveContainer // Responsive container component
} from 'recharts';

/**
 * InventoryInsights component
 * @param {Object} props - component props
 * @param {Array} props.data - inventory data
 * @returns {JSX.Element} - pie chart component
 */
const InventoryInsights = ({ data }) => {
  /**
   * Sort the data in descending order based on quantity
   */
  const sortedData = [...data].sort((a, b) => b.quantity - a.quantity);
  
  /**
   * Extract the top 10 items with the highest quantity
   */
  const topTenData = sortedData.slice(0, 10);

  return (
    /**
     * Responsive container to render the chart
     */
    <ResponsiveContainer width="100%" height={300}>
      /**
       * Pie chart component
       */
      <PieChart>
        /**
         * Pie component with quantity as the data key
         * Disable animation and set the chart dimensions
         */
        <Pie
          dataKey="quantity"
          isAnimationActive={false}
          data={topTenData}
          cx="50%" // center x-coordinate
          cy="50%" // center y-coordinate
          outerRadius={140} // outer radius of the pie
          fill="#8884d8" // fill color
          label // display labels
        />
        /**
         * Tooltip component to display data on hover
         */
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default InventoryInsights;