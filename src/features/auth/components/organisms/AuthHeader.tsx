
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Avatar, Box, IconButton, InputBase, Toolbar, Typography } from '@mui/material';
import React from 'react';

interface AuthHeaderProps {
  toggleTheme: () => void;
  themeMode: 'light' | 'dark';
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ toggleTheme, themeMode }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#ffffff',
        width: 'calc(100% - 240px)',
        left: '240px',
        zIndex: theme => theme.zIndex.drawer + 1,
        boxShadow: 'none',
        borderBottom: '1.5px solid #e6eff5',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0 16px' }}>
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, textAlign: 'left', color: '#343c6a' }}
        >
          Overview
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f5f7fa', 
              borderRadius: '20px', 
              p: '1.5',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <SearchIcon sx={{ color: '#718ebf', ml: 2.5 }} />
            <InputBase
              placeholder="Search for something"
              sx={{
                flex: 1,
                color: '#343c6a',
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', ml: 3 }}>
          <IconButton
            sx={{
              backgroundColor: '#f5f7fa', 
              borderRadius: '50%', 
              p: 1.5,
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
              color: '#343c6a',
              mr: 2,
            }}
          >
            <SettingsIcon />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: '#f5f7fa', 
              borderRadius: '50%', 
              p: 1.5, 
              color: '#fe5c73',
             boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="User Profile" src="/path-to-image.jpg" sx={{ ml: 3 }} />

          <IconButton onClick={toggleTheme} color="inherit">
        {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AuthHeader;
