import { Box, Typography } from '@mui/material';
import React from 'react';
import AuthButton from '../atoms/AuthButton';

const HomePage: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the Home Page
      </Typography>
      <Typography variant="body1">
        You can navigate to other sections using the sidebar or Click in on the `Workoo` text to return to `home`.
      </Typography>
      <br/>
      <AuthButton variant="elevated" onClick={() => console.log('Clicked!')}>
        Elevated Button
      </AuthButton>
      <br/><br/>
      <AuthButton variant="text" onClick={() => console.log('Clicked!')}>
        Text Button
      </AuthButton>
      <br/><br/>
      <AuthButton variant="filled" onClick={() => console.log('Clicked!')}>
        Filled Button
      </AuthButton>
      <br/><br/>
      <AuthButton variant="outlined" onClick={() => console.log('Clicked!')}>
        Outlined Button
      </AuthButton>
      <br/><br/>
      <AuthButton variant="tonal" onClick={() => console.log('Clicked!')}>
        Tonal Button
      </AuthButton>
      <br/><br />
      <AuthButton variant="filled" onClick={() => console.log('Disabled Button Clicked!')} disabled>
        Disabled Button
      </AuthButton>
    </Box>
  );
};

export default HomePage;
