import { Box, ThemeProvider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { theme } from "./themes";
import './loading.css'
import CustomizedDialogs from "./notification";


export default function Loader(){
    return(

        <ThemeProvider theme={theme}>
        <Stack direction="column" spacing={5}><div class="main">
            <Box sx={{display:"block", padding: "5%" }}>
                <Typography variant="h4" color="#A267AC">Time is Loading!</Typography>
                <Typography variant="h6" color="#A267AC">Subscribe now to know more...</Typography>
        <div class="center">
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  <div class="wave"></div>
  </div>
  
  <CustomizedDialogs sx={{padding:"5%"}}/></Box></div>
</Stack></ThemeProvider>
    );
}