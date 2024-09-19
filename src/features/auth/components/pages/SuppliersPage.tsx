import TextAtom from '@/features/components/atoms/TextAtom';
import { Box } from '@mui/material';
import React from 'react';

const SuppliersPage: React.FC = () => {
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
        Suppliers
      </TextAtom>
      <TextAtom variant="body" size="small">
        Welcome to the Suppliers Page. Here you can manage your suppliers.
      </TextAtom>
    </Box>
  );
};

export default SuppliersPage;
