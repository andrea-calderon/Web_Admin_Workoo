import Button from '@mui/material/Button';
import { SxProps, Theme, useTheme } from '@mui/material/styles';
import React from 'react';

interface AuthButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text' | 'elevated' | 'tonal';
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

const AuthButton: React.FC<AuthButtonProps> = ({ onClick, children, variant = 'filled', disabled = false, sx }) => {
  const theme = useTheme();

  const muiVariant = variant === 'filled' || variant === 'elevated' || variant === 'tonal' ? 'contained' : variant;

  
  
  const customStyles = {
    
    ...(disabled && {
      backgroundColor: theme.palette.action.disabledBackground, 
      color: theme.palette.action.disabled, 
      cursor: 'not-allowed',
    }),
  };


  return (
    <Button
      variant={muiVariant}
      color="primary"
      onClick={onClick}
      disabled={disabled}
      sx={{
        borderRadius: '100px', 
        ...customStyles,
        backgroundColor: variant === 'tonal' 
          ? theme.palette.secondary.light 
          : variant === 'elevated'
          ? theme.palette.primary.light
          : variant === 'filled'
          ? theme.palette.primary.dark
          :undefined,
        color: variant === 'tonal' 
        ? theme.palette.text.primary 
        : variant === 'elevated'
        ? theme.palette.primary.main
        :undefined,
        
        ...sx, 
      }}
    >
      {children}
    </Button>
  );
};

export default AuthButton;