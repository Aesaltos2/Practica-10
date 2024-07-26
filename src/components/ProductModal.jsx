import React from 'react';
import { Dialog, IconButton, Box, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

const ProductModal = ({ open, onClose, images, activeStep, setActiveStep }) => {
  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % images.length);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => (prevStep - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setActiveStep(index);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={{ 
        '& .MuiDialog-paper': { 
          maxWidth: '90vw',  // Ajusta el ancho máximo
          maxHeight: '90vh', // Ajusta la altura máxima
          width: 'auto',
          height: 'auto',
          backgroundColor: 'transparent',
          boxShadow: 'none', // Elimina la sombra
          overflow: 'hidden', // Asegura que el contenido no desborde
        },
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'transparent',
        }}
      >
        {/* Imagen Principal */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 450,
            height: 400,
            position: 'relative',
            marginTop: 7,
            marginBottom: 2,
            
          }}
        >
          <img
            src={images[activeStep]}
            alt={`Slide ${activeStep + 1}`}
            style={{ width: '110%', height: '110%', objectFit: 'contain' }}
          />
          
          {/* Controles de Navegación */}
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: 0,
              transform: 'translateY(-50%)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={handlePrevious}
              sx={{
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                '&:hover': {
                  backgroundColor: 'lightgray',
                },
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: '2px' }}>{'<'}</Typography>
            </IconButton>
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconButton
              onClick={handleNext}
              sx={{
                color: 'black',
                backgroundColor: 'white',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                '&:hover': {
                  backgroundColor: 'lightgray',
                },
              }}
            >
              <Typography variant="h4" sx={{ marginBottom: '2px' }}>{'>'}</Typography>
            </IconButton>
          </Box>
        </Box>

        {/* Miniaturas de Imágenes */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            marginTop: 2,
            paddingBottom: 2,
          }}
        >
          {images.map((thumbnail, index) => (
            <IconButton
              key={index}
              onClick={() => handleThumbnailClick(index)}
              sx={{
                padding: 0,
              }}
            >
              <img
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 8,
                    filter: index === activeStep ? 'opacity(40%)' : 'none',
                    backgroundColor: index === activeStep ? 'white' : 'none',

                }}
              />
            </IconButton>
          ))}
        </Box>

        {/* Botón de Cerrar */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: '50%',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo más oscuro al pasar el mouse
            },
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              color: 'white',
              padding: 0,
            }}
          >
            <Close />
          </IconButton>
        </Box>
      </Box>
    </Dialog>
  );
};

export default ProductModal;
