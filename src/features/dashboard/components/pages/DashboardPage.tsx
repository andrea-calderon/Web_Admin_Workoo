import { Typography } from '@mui/material';
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom sx={{color: '#b1b1b1'}}>
        Dashboard
      </Typography>
      <Typography variant="body1">
        Welcome to the Dashboard Page. Here you can manage your stats.
      </Typography>
    </div>
  );
};

export default DashboardPage;

