import React from "react";
import { Link } from 'react-router-dom';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from "@mui/material";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import "./Home.css";

function Home() {
  return (
    <>
      {/* Background */}
      <Grid item xs={12} style={{
        background: `url(https://cdn.discordapp.com/attachments/966117479455809540/982107427149348906/marius-masalar-rPOmLGwai2w-unsplash.jpg)`,
        backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: 'cover',
      }}>

        {/* Navbar */}
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
        {/* Home */}
        <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
          <Grid alignItems="center" item xs={12}>
            <Box paddingX={20} >
              <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" id="titulo1">Bem vindo(a)!</Typography>
              <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" id="titulo2">Está pronto para levar seu networking a um novo nível?</Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box marginRight={1}>
              </Box>
              <Button variant="outlined" id='botao'>Explorar a comunidade</Button>
            </Box>
          </Grid>

          <Grid xs={12} className='postagens'>
          </Grid>
        </Grid>
        <Grid container direction="row" justifyContent="center" alignItems="center">
          
          <Box className="maincontainer">

            <Box id="card1" className="card">

              <Box className="front">
              <Typography>Objetivos/Referencias/Metas/Oportunidades</Typography>
              </Box>

              <Box className="back">
              <Typography>Descrição</Typography>
              </Box>

            </Box>
          </Box>

          <Box className="maincontainer">

            <Box id="card2" className="card">

              <Box className="front">
              <Typography>Objetivos/Referencias/Metas/Oportunidades</Typography>
              </Box>

              <Box className="back">
              <Typography>Descrição</Typography>
              </Box>

            </Box>
          </Box>

          <Box className="maincontainer">

            <Box id="card3" className="card">

              <Box className="front">
              <Typography>Objetivos/Referências/Metas/Oportunidades</Typography>
              </Box>

              <Box className="back">
              <Typography>Descrição</Typography>
              </Box>

            </Box>
          </Box>
        </Grid>
      </Grid>

    </>
  );
}

export default Home;