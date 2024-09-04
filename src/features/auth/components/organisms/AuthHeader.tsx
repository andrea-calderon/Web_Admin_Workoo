
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Avatar, Box, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useState } from 'react';


interface AuthHeaderProps {
  toggleTheme: () => void;
  themeMode: 'light' | 'dark';
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ toggleTheme, themeMode }) => {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleSettingsClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme => theme.palette.background.default,
        width: 'calc(100% - 240px)',
        left: '240px',
        zIndex: theme => theme.zIndex.drawer + 1,
        boxShadow: 'none',
        borderBottom: theme => `1.5px solid ${theme.palette.divider}`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0 16px' }}>
      <Typography
          variant="h6"
          sx={{ flexGrow: 1, textAlign: 'left', color: theme.palette.text.primary }}
        >
          Overview
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: theme.palette.background.paper,
              borderRadius: '20px',
              p: '1.5',
              boxShadow: theme.shadows[1],
            }}
          >
            <SearchIcon sx={{ color: theme.palette.text.secondary, ml: 2.5 }} />
            <InputBase
              placeholder="Search for something"
              sx={{
                flex: 1,
                color: theme.palette.text.primary,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', ml: 3 }}>
          <IconButton
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: '50%',
              p: 1.5,
              boxShadow: theme.shadows[1],
              color: theme.palette.text.primary,
              mr: 2,
            }}
            onClick={handleSettingsClick}
          >
            <SettingsIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={() => { toggleTheme(); handleClose(); }}>
              {themeMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
              <Typography sx={{ ml: 1 }}>
                {themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
              </Typography>
            </MenuItem>
          </Menu>

          <IconButton
            sx={{
              backgroundColor: theme.palette.background.paper,
              borderRadius: '50%',
              p: 1.5,
              color: theme.palette.error.main,
              boxShadow: theme.shadows[1],
            }}
          >
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="User Profile" src="/path-to-image.jpg" sx={{ ml: 3 }} />

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AuthHeader;
