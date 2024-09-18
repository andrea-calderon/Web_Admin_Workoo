import TextAtom from '@/features/components/TextAtom';
import { Box } from '@mui/material';
import React from 'react';

const QualificationsPage: React.FC = () => {
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
        Qualifications
      </TextAtom>
      <TextAtom variant="body" size="small">
        Welcome to the Qualifications Page. Here you can manage your
        qualifications.
      </TextAtom>
    </Box>
  );
};

export default QualificationsPage;
