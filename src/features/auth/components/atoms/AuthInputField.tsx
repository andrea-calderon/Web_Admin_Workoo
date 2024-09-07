import { InputAdornment, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';


interface AuthInputFieldProps {
  variant: 'outlined' | 'underlined' | 'rounded';
  label: string;
  placeholder: string;
  leftIcon?: React.ReactNode;
  actionIcon?: React.ReactNode;
}

const AuthInputField: React.FC<AuthInputFieldProps> = ({ variant, label, placeholder, leftIcon, actionIcon }) => {
  const theme = useTheme(); 

 
  const getInputStyles = () => {
    switch (variant) {
      case 'outlined':
        return {
          borderRadius: '8px',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: theme.palette.primary.main,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.dark,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.light,
            },
          },
        };
      case 'underlined':
        return {
          '& .MuiInput-underline:before': {
            borderBottomColor: theme.palette.secondary.main,
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: theme.palette.secondary.dark,
          },
          '& .MuiInput-underline.Mui-focused:before': {
            borderBottomColor: theme.palette.secondary.light,
          },
        };
      case 'rounded':
        return {
          borderRadius: '100px',
          '& .MuiOutlinedInput-root': {
            borderRadius: '100px',
            '& fieldset': {
              borderColor: theme.palette.tertiary.main,
            },
            '&:hover fieldset': {
              borderColor: theme.palette.tertiary.dark,
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.tertiary.light,
            },
          },
        };
      default:
        return {};
    }
  };

  return (
    <TextField
      variant={variant === 'underlined' ? 'standard' : 'outlined'}
      label={label}
      placeholder={placeholder}
      InputProps={{
        startAdornment: leftIcon ? <InputAdornment position="start">{leftIcon}</InputAdornment> : null,
        endAdornment: actionIcon ? <InputAdornment position="end">{actionIcon}</InputAdornment> : null,
      }}
      sx={getInputStyles()}
    />
  );
};

export default AuthInputField;
