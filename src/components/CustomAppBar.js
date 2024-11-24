// src/components/CustomAppBar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';

function CustomAppBar() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Subir Archivos';
      case '/Historial':
        return 'Historial';
      default:
        return '';
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - 240px)`,
        ml: '240px',
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {getTitle()}
        </Typography>
        <IconButton color="inherit">
          <AccountCircleIcon />
          <Typography variant="body1" sx={{ marginLeft: '8px' }}>
            Usuario
          </Typography>
        </IconButton>
        <IconButton color="inherit">
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default CustomAppBar;
