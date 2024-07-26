import React from 'react';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const ProductCarousel = ({ images, setActiveStep, openModal, activeStep }) => {
  const handleNext = () => {
    setActiveStep((prevStep) => (prevStep + 1) % images.length);
  };

  const handlePrevious = () => {
    setActiveStep((prevStep) => (prevStep - 1 + images.length) % images.length);
  };

  return (
    <Box sx={{ position: 'relative', maxWidth: 400 }}>
      <Box sx={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${activeStep * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{ flexShrink: 0, width: '100%', height: 'auto' }}
            >
              <img
                src={image}
                alt={`Product preview ${index + 1}`}
                style={{
                  width: '100%',
                  borderRadius: 8,
                  boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                  cursor: 'pointer',
                }}
                onClick={() => openModal()}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <IconButton
        onClick={handlePrevious}
        sx={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)' }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={handleNext}
        sx={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)' }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default ProductCarousel;
