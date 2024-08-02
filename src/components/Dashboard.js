/**
 * Import necessary dependencies
 */
import React from 'eact';
import {
  Container, // Container component from MUI
  Grid, // Grid component from MUI
  Paper, // Paper component from MUI
  Typography // Typography component from MUI
} from '@mui/material';
import DemandForecast from './DemandForecast'; // DemandForecast component
import PriceRecommendation from './PriceRecommendation'; // PriceRecommendation component
import InventoryInsights from './InventoryInsights'; // InventoryInsights component

/**
 * Dashboard component
 * @param {Object} props - component props
 * @param {Array} props.csvData - CSV data
 * @returns {JSX.Element} - dashboard component
 */
const Dashboard = ({ csvData }) => {
  return (
    /**
     * Container component to wrap the dashboard content
     */
    <Container>
      /**
       * Dashboard title
       */
      <Typography variant="h4" gutterBottom>
        Business Dashboard
      </Typography>
      /**
       * Grid container to layout the dashboard components
       */
      <Grid container spacing={3}>
        /**
         * Grid item for Demand Forecast component
         */
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom>
              Demand Forecast
            </Typography>
            /**
             * DemandForecast component with csvData as prop
             */
            <DemandForecast data={csvData} />
          </Paper>
        </Grid>
        /**
         * Grid item for Price Recommendation component
         */
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom>
              Price Recommendation
            </Typography>
            /**
             * PriceRecommendation component with csvData as prop
             */
            <PriceRecommendation data={csvData} />
          </Paper>
        </Grid>
        /**
         * Grid item for Inventory Insights component
         */
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom>
              Inventory Insights
            </Typography>
            /**
             * InventoryInsights component with csvData as prop
             */
            <InventoryInsights data={csvData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;