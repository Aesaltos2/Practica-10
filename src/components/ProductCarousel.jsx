import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Box, useTheme } from '@mui/material';

const ProductCarousel = ({ images, activeStep, setActiveStep, openModal }) => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'relative', maxWidth: 400 }}>
      <SwipeableViews index={activeStep} onChangeIndex={setActiveStep}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Product preview ${index + 1}`}
              style={{
                width: '100%',
                borderRadius: theme.shape.borderRadius || 8,
                boxShadow: theme.shadows[3],
                cursor: 'pointer'
              }}
              onClick={openModal}
            />
          </div>
        ))}
      </SwipeableViews>
    </Box>
  );
};

export default ProductCarousel;
