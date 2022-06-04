import React from 'react';
import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import './Navbar.css'
function Navbar() {
    return (
        <>
        <Grid m={12}>
            <Box className="navbarmenu">
                <IconButton edge="start" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                    MENU
                </Typography>
                <Box className="navbarbutton">
                    <Link to='/Login'>
                        <button className="nav-button"> Login</button>
                    </Link>
                    <Link to='/Cadastro'>
                        <button className="nav-button">Cadastre-se</button>
                    </Link>
                </Box>
            </Box>
        </Grid>
        </>
    )
}

export default Navbar;