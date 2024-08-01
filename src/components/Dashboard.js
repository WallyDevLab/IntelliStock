import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import DemandForecast from './DemandForecast';
import PriceRecommendation from './PriceRecommendation';
import InventoryInsights from './InventoryInsights';

const Dashboard = ({ csvData }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Business Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom>
              Demand Forecast
            </Typography>
            <DemandForecast data={csvData} />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom>
              Price Recommendation
            </Typography>
            <PriceRecommendation data={csvData} />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Typography variant="h6" gutterBottom>
              Inventory Insights
            </Typography>
            <InventoryInsights data={csvData} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
