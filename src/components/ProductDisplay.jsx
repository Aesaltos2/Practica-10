import React, { useState } from 'react';
import { Box, Grid, Paper, Typography, Button, IconButton } from '@mui/material';
import ProductCarousel from './ProductCarousel';
import ProductModal from './ProductModal';
import { Add, Remove, ShoppingCart } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const product = {
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: "$125.00",
    originalPrice: "$250.00",
    discount: "50%",
    brand: "Sneakers Company",
    images: [
        "./images/image-product-1.jpg",
        "./images/image-product-2.jpg",
        "./images/image-product-3.jpg",
        "./images/image-product-4.jpg",
    ],
    thumbnails: [
        "./images/image-product-1-thumbnail.jpg",
        "./images/image-product-2-thumbnail.jpg",
        "./images/image-product-3-thumbnail.jpg",
        "./images/image-product-4-thumbnail.jpg",
    ]
};

const ProductDisplay = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isModalOpen, setModalOpen] = useState(false);
    const theme = useTheme(); // Obtén el tema para usar en estilos

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    const handleQuantityChange = (delta) => {
        setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    };

    const handleAddToCart = () => {
        console.log(`Added ${quantity} items to the cart.`);
    };

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <Box sx={{ padding: 6, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Grid container spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                {/* Carrusel de Imágenes y Navegación */}
                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                        <ProductCarousel
                            images={product.images}
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            openModal={openModal}
                        />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        {product.thumbnails.map((thumbnail, index) => (
                            <IconButton
                                key={index}
                                onClick={() => handleStepChange(index)}
                                sx={{
                                    padding: 0,
                                    margin: 1.5,
                                    width: 80,
                                    height: 80,
                                    borderRadius: 8,
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
                                    }}
                                />
                            </IconButton>
                        ))}
                    </Box>
                </Grid>

                {/* Información del Producto */}
                <Grid item md={4} paddingBottom={10}>
                    <Paper 
                        sx={{ 
                            padding: 3,
                            boxShadow: 'none'
                        }}
                    >
                        <Typography 
                            variant="h3" 
                            component="span" 
                            color="primary" 
                            gutterBottom
                        >
                            {product.brand}
                        </Typography>
                        <Typography 
                            variant="h4" 
                            component="h1" 
                            gutterBottom
                        >
                            {product.title}
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ textAlign: 'justify', color: theme.palette.neutral[600] }}>
                            {product.description}
                        </Typography>
                        <Box sx={{ marginBottom: 2 }}>
                            <Box 
                                sx={{ 
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'flex-start',
                                    marginBottom: 2 
                                }}
                            >
                                <Box 
                                    sx={{ 
                                        display: 'flex', 
                                        alignItems: 'center', 
                                        marginBottom: 1 
                                    }}
                                >
                                    <Typography 
                                        variant="h6" 
                                        color="text.primary" 
                                        sx={{ 
                                            fontSize: '1.5rem', 
                                            fontWeight: 'bold', 
                                            color: theme.palette.neutral[800]
                                        }}
                                    >
                                        {product.price}
                                    </Typography>
                                    <Box 
                                        sx={{ 
                                            backgroundColor: theme.palette.primary.second, 
                                            color: theme.palette.primary.main,
                                            padding: '0.25rem 0.5rem',
                                            borderRadius: '0.25rem',
                                            marginLeft: 1
                                        }}
                                    >
                                        <Typography 
                                            variant="body2" 
                                            sx={{ 
                                                fontWeight: 'bold',
                                                fontSize: '0.875rem'
                                            }}
                                        >
                                            {product.discount}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography 
                                    variant="body2" 
                                    color="text.secondary" 
                                    sx={{ 
                                        fontWeight: 'bold',
                                        color: theme.palette.neutral[300],
                                        textDecoration: 'line-through',
                                    }}
                                >
                                    {product.originalPrice}
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <Button
                                variant="outlined"
                                aria-label="decrease quantity"
                                onClick={() => handleQuantityChange(-1)}
                                sx={{ marginRight: 1 }}
                            >
                                <Remove />
                            </Button>
                            <Typography variant="body1" sx={{ marginX: 2 }}>
                                {quantity}
                            </Typography>
                            <Button
                                variant="outlined"
                                aria-label="increase quantity"
                                onClick={() => handleQuantityChange(1)}
                                sx={{ marginLeft: 1 }}
                            >
                                <Add />
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 2, 
                                    borderRadius: '0.5rem',
                                    padding: '0.5rem 1rem',
                                    color: 'white',
                                }}
                                aria-label="add to cart"
                                onClick={handleAddToCart}>
                                <ShoppingCart sx={{ marginRight: 1, color: 'white', fontSize: 16 }} />
                                Add to Cart
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
            <ProductModal
                open={isModalOpen}
                onClose={closeModal}
                images={product.images}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
            />
        </Box>
    );
};

export default ProductDisplay;
