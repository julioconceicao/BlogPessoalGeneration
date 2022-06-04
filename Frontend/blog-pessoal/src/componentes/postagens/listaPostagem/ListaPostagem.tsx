import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';

function ListaPostagem() {

  return (
    <>
      <Grid item xs={12} style={{
        background: `url(https://cdn.discordapp.com/attachments/966117479455809540/982107522745892935/wes-hicks-MEL-jJnm7RQ-unsplash.jpg)`,
        backgroundRepeat: 'no-repeat', width: '100%', height: '100vh', backgroundSize: '100%',
      }}>
        <Box m={2} >
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Postagens
              </Typography>
              <Typography variant="h5" component="h2">
                Título
              </Typography>
              <Typography variant="body2" component="p">
                Texto da Postagem
              </Typography>
              <Typography variant="body2" component="p">
                Tema
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>

                <Link to="" className="text-decorator-none" >
                  <Box mx={1}>
                    <Button variant="contained" className="marginLeft" size='small'>
                      Atualizar
                    </Button>
                  </Box>
                </Link>
                <Link to="" className="text-decorator-none">
                  <Box mx={1}>
                    <Button variant="contained" size='small'>
                      Deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Grid>
    </>)
}

export default ListaPostagem;