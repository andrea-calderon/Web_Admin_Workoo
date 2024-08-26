import { Typography } from '@mui/material';
import React from 'react';

const SuppliersPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom sx={{color: '#b1b1b1'}}>
        Suppliers
      </Typography>
      <Typography variant="body1">
        Welcome to the Suppliers Page. Here you can manage your suppliers.
      </Typography>
    </div>
  );
};

export default SuppliersPage;
