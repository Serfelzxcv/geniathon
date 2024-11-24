// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CustomAppBar from './components/CustomAppBar';
import UploadPage from './pages/UploadPage';
import TablePage from './pages/TablePage';
import { Box } from '@mui/material';

const drawerWidth = 240;

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleDrawerToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        {/* Barra superior */}
        <CustomAppBar handleDrawerToggle={handleDrawerToggle} />
        
        {/* Sidebar */}
        <Sidebar
          open={sidebarOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
        />
        
        {/* Contenido principal */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: sidebarOpen ? `${drawerWidth}px` : 0, // Ajuste dinámico según el estado del Sidebar
          }}
        >
          <Routes>
            <Route path="/" element={<UploadPage />} />
            <Route path="/Historial" element={<TablePage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
