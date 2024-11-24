import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider } from '@mui/material';
import UploadIcon from '@mui/icons-material/CloudUpload';
import TableChartIcon from '@mui/icons-material/TableChart';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ open, drawerWidth }) => {
  const location = useLocation(); // Para detectar la ruta activa

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#F5F5F5', // Fondo gris claro para el Sidebar
          color: '#003f88', // Texto azul oscuro
        },
      }}
    >
      {/* Título */}
      <Typography
        variant="h6"
        sx={{
          p: 2,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#FF6F00', // Naranja
          backgroundColor: '#FFF3E0', // Fondo suave naranja
        }}
      >
        Credicorp
      </Typography>
      <Divider />

      {/* Lista de opciones */}
      <List>
        {/* Opción: Subir Archivos */}
        <ListItem
          button
          component={Link}
          to="/"
          sx={{
            backgroundColor: location.pathname === '/' ? '#FF6F00' : 'transparent',
            color: location.pathname === '/' ? '#FFFFFF' : '#003f88',
            '&:hover': {
              backgroundColor: '#FF8F32', // Naranja más claro al pasar el mouse
              color: '#FFFFFF',
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: location.pathname === '/' ? '#FFFFFF' : '#FF6F00', // Naranja activo
            }}
          >
            <UploadIcon />
          </ListItemIcon>
          <ListItemText primary="Subir Archivos" />
        </ListItem>

        {/* Opción: Historial */}
        <ListItem
          button
          component={Link}
          to="/Historial"
          sx={{
            backgroundColor: location.pathname === '/Historial' ? '#FF6F00' : 'transparent',
            color: location.pathname === '/Historial' ? '#FFFFFF' : '#003f88',
            '&:hover': {
              backgroundColor: '#FF8F32', // Naranja más claro al pasar el mouse
              color: '#FFFFFF',
            },
          }}
        >
          <ListItemIcon
            sx={{
              color: location.pathname === '/Historial' ? '#FFFFFF' : '#FF6F00', // Naranja activo
            }}
          >
            <TableChartIcon />
          </ListItemIcon>
          <ListItemText primary="Historial" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
