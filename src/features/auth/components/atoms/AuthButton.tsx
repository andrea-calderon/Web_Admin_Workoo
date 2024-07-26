import React from 'react';
import Button from '@mui/material/Button';
import { SxProps, Theme } from '@mui/material/styles';

interface AuthButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    sx?: SxProps<Theme>;
  }
  
  const AuthButton: React.FC<AuthButtonProps> = ({ onClick, children, sx }) => (
    <Button 
        variant="contained" 
        color="primary" 
        onClick={onClick} 
        sx={sx}
    >
      {children}
    </Button>
  );

  export default AuthButton;
