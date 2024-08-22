import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import { AppBar, Avatar, Box, IconButton, InputBase, Toolbar, Typography } from '@mui/material';

const AuthHeader = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#ffffff',
        color: '#ffffff',
        width: 'calc(100% - 240px)', 
        left: '240px',              
        zIndex: theme => theme.zIndex.drawer + 1, 
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', padding: '0 16px' }}>
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'left', color: '#343c6a' }}>
          Overview
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2, backgroundColor: '#ffffff', borderRadius: 1, pl: 1 }}>
          <SearchIcon sx={{ color: '#718ebf' }} />
          <InputBase placeholder="Search for something" sx={{ ml: 1, flex: 1, color: '#718ebf' }} />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ color: '#718ebf' }}>
            <SettingsIcon />
          </IconButton>
          <IconButton sx={{ color: '#fe5c73' }}>
            <NotificationsIcon />
          </IconButton>
          <Avatar alt="User Profile" src="/path-to-image.jpg" sx={{ ml: 2 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AuthHeader;
