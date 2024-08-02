/**
 * Import necessary dependencies
 */
import React from 'eact';
import {
  LineChart, // Line chart component
  Line, // Line component
  XAxis, // X-axis component
  YAxis, // Y-axis component
  CartesianGrid, // Grid component
  Tooltip, // Tooltip component
  Legend, // Legend component
  ResponsiveContainer // Responsive container component
} from 'echarts';

/**
 * DemandForecast component
 * @param {Object} props - component props
 * @param {Array} props.data - demand forecast data
 * @returns {JSX.Element} - line chart component
 */
const DemandForecast = ({ data }) => (
  /**
   * Responsive container to render the chart
   */
  <ResponsiveContainer width="100%" height={300}>
    /**
     * Line chart component
     */
    <LineChart data={data}>
      /**
       * Grid component with dashed lines
       */
      <CartesianGrid strokeDasharray="3 3" />
      /**
       * X-axis component with order date as the data key
       */
      <XAxis dataKey="order_date" />
      /**
       * Y-axis component with quantity as the data key
       */
      <YAxis dataKey="quantity" />
      /**
       * Tooltip component to display data on hover
       */
      <Tooltip />
      /**
       * Legend component to display chart legend
       */
      <Legend />
      /**
       * Line component with quantity as the data key
       * Set the line type to monotone and customize the appearance
       */
      <Line
        type="monotone"
        dataKey="quantity"
        stroke="#8884d8" // line color
        activeDot={{ r: 8 }} // customize the active dot
      />
    </LineChart>
  </ResponsiveContainer>
);

export default DemandForecast;