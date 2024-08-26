import { Typography } from '@mui/material';
import React from 'react';

const AnalysisPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom sx={{color: '#b1b1b1'}}>
        Analysis
      </Typography>
      <Typography variant="body1">
        Welcome to the Analysis Page. Here you can view and analyze data.
      </Typography>
    </div>
  );
};

export default AnalysisPage;