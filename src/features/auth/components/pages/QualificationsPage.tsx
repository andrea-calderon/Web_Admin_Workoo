import { Typography } from '@mui/material';
import React from 'react';

const QualificationsPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom sx={{color: '#b1b1b1'}}>
        Qualifications
      </Typography>
      <Typography variant="body1">
        Welcome to the Qualifications Page. Here you can manage your qualifications.
      </Typography>
    </div>
  );
};

export default QualificationsPage;