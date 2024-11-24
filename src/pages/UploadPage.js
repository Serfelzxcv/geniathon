import React, { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import DeleteIcon from '@mui/icons-material/Delete';

function UploadPage() {
  const [documentFile, setDocumentFile] = useState(null);
  const [documentPreview, setDocumentPreview] = useState(null);
  const [videoFile, setVideoFile] = useState(null);

  const handleDocumentChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setDocumentFile(file);

      if (file.type === 'application/pdf') {
        const fileURL = URL.createObjectURL(file);
        setDocumentPreview(fileURL);
      } else {
        setDocumentPreview(null);
      }
    }
  };

  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setVideoFile(URL.createObjectURL(file)); // Creamos una URL para previsualizar el video
    }
  };

  const handleRemoveDocument = () => {
    setDocumentFile(null);
    setDocumentPreview(null);
  };

  const handleRemoveVideo = () => {
    setVideoFile(null);
  };

  // Función para procesar y limpiar los elementos cargados
  const handleProcess = () => {
    setDocumentFile(null);
    setDocumentPreview(null);
    setVideoFile(null);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f8ff', // Fondo azul claro
        color: '#003f88', // Azul oscuro
        padding: 4,
      }}
    >
      {/* Contenedor principal para las cajas */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 6, // Espacio entre los títulos y contenedores
          mb: 4, // Margen inferior
        }}
      >
        {/* Contenedor de Documento */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', color: '#0077b6', mb: 2 }}
          >
            Documento
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #0077b6',
              borderRadius: 4,
              width: 250,
              height: 250,
              backgroundColor: '#caf0f8',
              position: 'relative',
            }}
          >
            {documentFile ? (
              <>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    mb: 2,
                  }}
                >
                  <DescriptionIcon sx={{ fontSize: 50, color: '#0077b6' }} />
                  <CheckCircleIcon
                    sx={{
                      fontSize: 20,
                      color: '#4caf50', // Verde
                      position: 'absolute',
                      top: -10,
                      right: -10,
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: 'center',
                    color: '#003f88',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                  }}
                  onClick={() =>
                    window.open(URL.createObjectURL(documentFile), '_blank')
                  }
                >
                  {documentFile.name}
                </Typography>
              </>
            ) : (
              <IconButton component="label" sx={{ color: '#0077b6' }}>
                <UploadFileIcon sx={{ fontSize: 50 }} />
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  hidden
                  onChange={handleDocumentChange}
                />
              </IconButton>
            )}
            {!documentFile && (
              <Typography
                variant="body2"
                sx={{ mt: 2, fontWeight: 'bold', color: '#0077b6' }}
              >
                - Cargue el Documento
              </Typography>
            )}
            {documentFile && (
              <IconButton
                onClick={handleRemoveDocument}
                sx={{
                  position: 'absolute',
                  top: -10,
                  right: -10,
                  color: '#d32f2f',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  fontSize: 24,
                  boxShadow: 2,
                  zIndex: 10,
                }}
              >
                <DeleteIcon fontSize="large" />
              </IconButton>
            )}
          </Box>
        </Box>

        {/* Contenedor de Video */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', color: '#0077b6', mb: 2 }}
          >
            Video
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #0077b6',
              borderRadius: 4,
              width: 250,
              height: 250,
              backgroundColor: '#caf0f8',
              position: 'relative',
            }}
          >
            {videoFile ? (
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: '#000',
                  borderRadius: 4,
                  overflow: 'hidden',
                }}
              >
                <video
                  src={videoFile}
                  controls
                  style={{ width: '100%', height: '100%' }}
                />
              </Box>
            ) : (
              <IconButton component="label" sx={{ color: '#0077b6' }}>
                <PlayCircleIcon sx={{ fontSize: 50 }} />
                <input
                  type="file"
                  accept="video/*"
                  hidden
                  onChange={handleVideoChange}
                />
              </IconButton>
            )}
            {!videoFile && (
              <Typography
                variant="body2"
                sx={{ mt: 2, fontWeight: 'bold', color: '#0077b6' }}
              >
                - Cargue el Video
              </Typography>
            )}
            {videoFile && (
              <IconButton
                onClick={handleRemoveVideo}
                sx={{
                  position: 'absolute',
                  top: -10,
                  right: -10,
                  color: '#d32f2f',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  fontSize: 24,
                  boxShadow: 2,
                  zIndex: 10,
                }}
              >
                <DeleteIcon fontSize="large" />
              </IconButton>
            )}
          </Box>
        </Box>
      </Box>

      {/* Botón Procesar */}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#0077b6',
          color: '#fff',
          fontWeight: 'bold',
          padding: '10px 30px',
          borderRadius: 4,
          fontSize: '16px',
          '&:hover': {
            backgroundColor: '#023e8a',
          },
        }}
        onClick={handleProcess} // Llamar a la función para limpiar los elementos
      >
        PROCESAR
      </Button>
    </Box>
  );
}

export default UploadPage;
