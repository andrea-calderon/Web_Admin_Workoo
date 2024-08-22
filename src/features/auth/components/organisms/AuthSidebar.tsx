import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const AuthSidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '240px',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          color: '#ffffff',
          zIndex: theme => theme.zIndex.drawer, 
        },
      }}
    >
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem>
            <Typography variant="h5" component="h1" gutterBottom sx={{color: '#6750A4'}}>
              WORKOO
            </Typography>
          </ListItem>
          <ListItem button component={Link} to="/app/dashboard">
            <ListItemIcon sx={{ color: '#b1b1b1' }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" sx={{color: '#b1b1b1'}} />
          </ListItem>

          <ListItem button component={Link} to="/app/users">
            <ListItemIcon sx={{ color: '#b1b1b1' }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Users" sx={{color: '#b1b1b1'}} />
          </ListItem>
         
          <ListItem button component={Link} to="/app/settings">
            <ListItemIcon sx={{ color: '#b1b1b1' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{color: '#b1b1b1'}} />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default AuthSidebar;
