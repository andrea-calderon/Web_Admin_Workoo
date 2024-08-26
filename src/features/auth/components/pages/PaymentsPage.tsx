import { Typography } from '@mui/material';
import React from 'react';

const PaymentsPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom sx={{color: '#b1b1b1'}}>
        Payments
      </Typography>
      <Typography variant="body1">
        Welcome to the Payments Page. Here you can manage your payments.
      </Typography>
    </div>
  );
};

export default PaymentsPage;