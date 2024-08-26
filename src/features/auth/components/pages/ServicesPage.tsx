import { Typography } from '@mui/material';
import React from 'react';

const ServicesPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom sx={{color: '#b1b1b1'}}>
        Services
      </Typography>
      <Typography variant="body1">
        Welcome to the Services Page. Here you can manage your services.
      </Typography>
    </div>
  );
};

export default ServicesPage;