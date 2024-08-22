import { Typography } from '@mui/material';
import React from 'react';

const UsersPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" component="h1" gutterBottom sx={{color: '#b1b1b1'}}>
        Users
      </Typography>
      <Typography variant="body1">
        Welcome to the Users Page. Here you can manage your users.
      </Typography>
    </div>
  );
};

export default UsersPage;
