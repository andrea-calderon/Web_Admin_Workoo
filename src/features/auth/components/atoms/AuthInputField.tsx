import { InputAdornment, TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React from 'react';


type AuthInputFieldProps ={
  variant: 'outlined' | 'underlined' | 'rounded';
  label: string;
  placeholder: string;
  leftIcon?: React.ReactNode;
  actionIcon?: React.ReactNode;
  error?: boolean;
  helperText?: string;
}

const AuthInputField: React.FC<AuthInputFieldProps> = ({ 
  variant, 
  label, 
  placeholder, 
  leftIcon, 
  actionIcon,
  error = false,
  helperText, 
}) => {
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
            ...(error && {
              '& fieldset': {
                borderColor: theme.palette.error.main, 
              },
            }),
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
          ...(error && {
            '&:before': {
              borderBottomColor: theme.palette.error.main, 
            },
          }),
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
            ...(error && {
              '& fieldset': {
                borderColor: theme.palette.error.main,
              },
            }),
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
      error={error}
      helperText={helperText}
      InputProps={{
        startAdornment: leftIcon ? <InputAdornment position="start">{leftIcon}</InputAdornment> : null,
        endAdornment: actionIcon ? <InputAdornment position="end">{actionIcon}</InputAdornment> : null,
      }}
      sx={getInputStyles()}
    />
  );
};

export default AuthInputField;
