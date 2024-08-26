import { Typography } from '@mui/material';
import React from 'react';

const SupportPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom sx={{color: '#b1b1b1'}}>
        Support
      </Typography>
      <Typography variant="body1">
        Welcome to the Support Page. Here you can find help and support resources.
      </Typography>
    </div>
  );
};

export default SupportPage;