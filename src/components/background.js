import React from "react";
// import './assets/WELCOME to Creatomat(1).mp4'
import Card from '@mui/material/Card';
import CardMedia from "@mui/material/CardMedia";
import video1 from '../assets/video1.mp4'
import './bg.css';
import {theme, hello} from "./themes.js";
import { ThemeProvider } from "@mui/material";
import Typography from "@mui/material/Typography";
import techgeeks from '../assets/techgeeks (1).mp4'



export default function Background(){


    return(
        <div className='main'>
            {/* <ThemeProvider theme={hello}> */}
            <div className="box">
                <video autoPlay loop muted >
                    <source src={techgeeks} type='video/mp4' />
                </video>
            </div>
            {/* </ThemeProvider> */}
            <div className="content">
            {/* <Typography variant="h3" gutterBottom>
         Heading! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
            <Typography variant="body2" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography> */}
            
        </div>
        </div>
    );
}