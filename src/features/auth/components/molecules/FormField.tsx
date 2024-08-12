import React, { useState } from 'react';
import AuthButton from '../atoms/AuthButton';
import { Box, Typography } from '@mui/material';

const FormField: React.FC = () => {
  const [showBox, setShowBox] = useState(false);

  const handleClick = () => {
    setShowBox(!showBox);
  };

  return (
    <div>
      <h1>Example of Material UI component</h1>
      <AuthButton onClick={handleClick} sx={{ backgroundColor: 'customColor' }}>
        Click Me!
      </AuthButton>
      {showBox && (
        <Box
          sx={{
            marginTop: 2,
            padding: 2,
            backgroundColor: 'lightgray',
            borderRadius: 1,
          }}
        >
          <Typography variant="body1">
            This is the additional box where you can add more text!
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default FormField;
