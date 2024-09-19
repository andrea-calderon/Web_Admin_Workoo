import TextAtom from '@/features/components/atoms/TextAtom';
import { Box } from '@mui/material';
import React from 'react';

const SettingsPage: React.FC = () => {
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
      <TextAtom
        variant="headline"
        size="large"
        sx={{ mb: 2, color: '#b1b1b1' }}
      >
        Settings
      </TextAtom>
      <TextAtom variant="body" size="small">
        Welcome to the Settings Page. Here you can manage your main
        configuration.
      </TextAtom>
    </Box>
  );
};

export default SettingsPage;
