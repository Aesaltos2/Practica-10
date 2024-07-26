import React from 'react'
import { AppBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function Nav({ children }) {
    const theme = useTheme();
    return (
        <AppBar
        position="static"
        sx={{
          backgroundColor: 'white',
          boxShadow: 'none',
          borderBottom: `2px solid ${theme.palette.neutral[300]}`
        }}
      >
            {children}
        </AppBar>
    )
}
