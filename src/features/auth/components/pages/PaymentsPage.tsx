import TextAtom from '@/features/components/TextAtom';
import { Box } from '@mui/material';
import React from 'react';

const PaymentsPage: React.FC = () => {
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
        Payments
      </TextAtom>
      <TextAtom variant="body" size="small">
        Welcome to the Payments Page. Here you can manage your payments.
      </TextAtom>
    </Box>
  );
};

export default PaymentsPage;
