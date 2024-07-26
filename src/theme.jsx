import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(26, 100%, 55%)', // Naranja primario
      second : 'hsl(25, 100%, 94%)'
    },
    secondary: {
      main: 'hsl(25, 100%, 94%)', // Naranja pálido
    },
    neutral: {
      900: 'hsl(0, 0%, 0%)',       // Negro
      800: 'hsl(220, 13%, 13%)',    // Azul muy oscuro
      600: 'hsl(219, 9%, 45%)',     // Azul grisáceo oscuro
      300: 'hsl(220, 14%, 75%)',    // Azul grisáceo
      150: 'hsl(223, 64%, 98%)',    // Azul grisáceo claro
      100: 'hsl(0, 0%, 100%)',      // Blanco
    },
  },
  typography: {
    fontFamily: "'Kumbh Sans', sans-serif",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: '2rem',
    },
    h2: {
      fontSize: '1.8rem',
    },
    h3: {
      fontSize: '1rem',
      fontWeight: 'bold', 
      textTransform: 'uppercase', 
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 'bold', 
    },
    h5: {
      fontSize: '0.875rem',
    },
    h6: {
      fontSize: '1.75rem',
    },
  },
  shape: {
    borderRadius: '0.5rem',
  },
  spacing: 8,
});

export default theme;