import React from 'react';
import animated1 from '../assets/animated1.png';
import { theme, hello } from './themes';
import { Stack, ThemeProvider } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {CardMedia} from '@mui/material';
import { Card } from '@mui/material';
import './bg.css'




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Quotes() {


    return (
        <div className='quotes'>
        <ThemeProvider theme={theme}> <Stack direction= "row" spacing={5}  sx={{ padding: "3%", borderRadius: "10px", maxWidth:"100%", justifyContent:"center" }} >
           <Item sx={{ maxWidth: "50%"  }}> <Card className='card' sx={{ maxWidth: "100%"  }}>
      <CardMedia
        component="img"
        height="350"
        width="50%"
        image={animated1}
        alt="card3"
      /></Card>
            </Item>

            <Item sx={{ maxWidth: "50%", justifyContent:"center", alignItems:"center", textAlign:"center"  }}>
            <Typography color="#73A9AD" variant="h3" gutterBottom sx={{ paddingLeft:"5%", paddingRight:"5%", paddingTop:"5%", justifyContent:"center", alignItems:"center", textAlign:"justify"}}>
                Hear from our ALUMNI!
            </Typography>
            <Typography color="#73A9AD" variant="body2" gutterBottom sx={{paddingLeft:"5%", paddingRight:"5%", paddingBottom:"5%", justifyContent:"center", alignItems:"center", textAlign:"justify"}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
            </Item>
        </Stack>
        </ThemeProvider>
        </div>
    );
}
