import { Box, Typography } from '@mui/material';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1">
        This is the main landing page of your application. You can navigate to other sections using the sidebar.
      </Typography>
    </Box>
  );
};

export default HomePage;
