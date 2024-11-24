import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function TablePage() {
  // Datos con la columna "fecha" y la URL del archivo en la carpeta public/files
  const rows = [
    { nombre: 'Documento A', nroDocumento: '001', fecha: '2023-11-20', fileUrl: '/files/DocumentoA.pdf' },
    { nombre: 'Documento B', nroDocumento: '002', fecha: '2023-11-21', fileUrl: '/files/DocumentoB.pdf' },
    { nombre: 'Documento C', nroDocumento: '003', fecha: '2023-11-22', fileUrl: '/files/DocumentoC.pdf' },
  ];

  return (
    <Box
      sx={{
        mt: 2,
        ml: 2,
        mr: 2,
        backgroundColor: '#f5f5f5', // Fondo gris claro
        borderRadius: 2,
        p: 2,
      }}
    >
      <Typography
        marginTop={5}
        variant="h5"
        gutterBottom
        sx={{
          textAlign: 'center',
          color: '#003f88', // Azul oscuro
          mb: 3,
        }}
      >
        Tabla de Archivos Procesados
      </Typography>
      <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
        <Table
          sx={{
            borderCollapse: 'separate',
            borderSpacing: '0px 5px', // Espaciado entre filas
          }}
        >
          <TableHead>
            <TableRow sx={{ backgroundColor: '#0077b6' }}>
              <TableCell
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center', // Centramos el texto
                  borderRight: '1px solid #fff', // Separador de columnas
                }}
              >
                Nombre
              </TableCell>
              <TableCell
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center', // Centramos el texto
                  borderRight: '1px solid #fff', // Separador de columnas
                }}
              >
                Nro de Documento
              </TableCell>
              <TableCell
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center', // Centramos el texto
                  borderRight: '1px solid #fff', // Separador de columnas
                }}
              >
                Fecha
              </TableCell>
              <TableCell
                sx={{
                  color: '#fff',
                  fontWeight: 'bold',
                  textAlign: 'center', // Centramos el texto
                }}
              >
                Acciones
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#caf0f8' : '#ade8f4', // Alternancia de colores
                  '&:hover': {
                    backgroundColor: '#90e0ef', // Color al pasar el mouse
                  },
                }}
              >
                <TableCell
                  sx={{
                    textAlign: 'center', // Centramos el texto
                    borderRight: '1px solid #0077b6', // Separador de columnas
                  }}
                >
                  {row.nombre}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: 'center', // Centramos el texto
                    borderRight: '1px solid #0077b6', // Separador de columnas
                  }}
                >
                  {row.nroDocumento}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: 'center', // Centramos el texto
                    borderRight: '1px solid #0077b6', // Separador de columnas
                  }}
                >
                  {row.fecha}
                </TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <IconButton
                    sx={{
                      color: '#0077b6',
                      '&:hover': {
                        color: '#023e8a',
                      },
                    }}
                    component="a"
                    href={row.fileUrl} // Enlace al archivo
                    download // Habilita la descarga
                  >
                    <DownloadIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TablePage;
