import TextAtom from '@/features/components/TextAtom';
import { Box } from '@mui/material';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <Box
      sx={{
        padding: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <TextAtom variant="headline" size="medium" sx={{ mb: 2 }}>
        Welcome to the Home Page
      </TextAtom>
      <TextAtom variant="body" size="small">
        You can navigate to other sections using the sidebar or click on the
        `Workoo` text to return to `home`.
      </TextAtom>
      <br />
    </Box>
  );
};

export default HomePage;
