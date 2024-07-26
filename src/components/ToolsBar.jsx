import React from 'react'
import { Toolbar, IconButton, Typography, Button, Box, Avatar, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ToolBar() {
    const theme = useTheme();

    return (
        <>
        <Toolbar sx={{ height: 101 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 0.05 }}>
                <img src="images/logo.svg" alt="Sneakers logo" />
            </Typography>
            <Box sx={{ display: 'flex', flexGrow: 1, gap: 2, justifyContent: 'flex-start' }}>
                <Button sx={{ color: theme.palette.neutral[300], textTransform: 'capitalize' }}>Collections</Button>
                <Button sx={{ color: theme.palette.neutral[300], textTransform: 'capitalize' }}>Men</Button>
                <Button sx={{ color: theme.palette.neutral[300], textTransform: 'capitalize' }}>Women</Button>
                <Button sx={{ color: theme.palette.neutral[300], textTransform: 'capitalize' }}>About</Button>
                <Button sx={{ color: theme.palette.neutral[300], textTransform: 'capitalize' }}>Contact</Button>
            </Box>
            <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
                <IconButton sx={{ color: theme.palette.neutral[300]}}>
                    <ShoppingCartIcon />
                </IconButton>
                <Avatar alt="Profile" src="images/image-avatar.png" />
            </Box>
        </Toolbar>
        </>
    )
}
