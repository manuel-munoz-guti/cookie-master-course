import React from 'react';
import NextLink from 'next/link';

import { AppBar, IconButton, Toolbar, Link, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={ 0 }>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
                <MenuOutlinedIcon />
            </IconButton>
            <Link component={ NextLink } href="/" underline="none">
                <Typography variant='h6' color='white'>Cookie Master</Typography>
            </Link>
            <div style={{ flex: 1 }}/>
            <Link component={ NextLink } href="/theme-changer" underline="none">
                <Typography variant='h6' color='white'>Cambiar Tema</Typography>
            </Link>
        </Toolbar>
    </AppBar>
  );
};
