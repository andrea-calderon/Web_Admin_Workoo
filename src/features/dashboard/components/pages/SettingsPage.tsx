import { Typography } from '@mui/material';
import React from 'react';

const SettingsPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom sx={{color: '#b1b1b1'}}>
        Settings
      </Typography>
      <Typography variant="body1">
        Welcome to the Settings Page. Here you can manage your main configuration.
      </Typography>
    </div>
  );
};

export default SettingsPage;

