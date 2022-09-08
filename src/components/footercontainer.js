import { ThemeProvider } from '@emotion/react'
import { AppBar, BottomNavigation, Button, Toolbar, Typography } from '@mui/material'
import { Box, Container, width } from '@mui/system'
import React from 'react'
import Footer from '../components/footer'
import { Nav } from './footer1'
import { theme } from './themes'
import './bg.css'

export default function FooterContainer() {
    return (
        <ThemeProvider theme={theme}>
        <Footer color="violet">
           
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>Company</Footer.Title>
                    <Footer.Link href="/">About us</Footer.Link>
                    <Footer.Link href="/">Contact us</Footer.Link>
                    
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Services</Footer.Title>
                    <Footer.Link href="/">Product Overview</Footer.Link>
                    <Footer.Link href="/">Growth Intelligence Platform</Footer.Link>
                    <Footer.Link href="/">Why Storemaven?</Footer.Link>
                   
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Use Cases</Footer.Title>
                    <Footer.Link href="/">Organic Growth</Footer.Link>
                    <Footer.Link href="/">Google Experiments</Footer.Link>
                    <Footer.Link href="/">Concept Testing</Footer.Link>
                    <Footer.Link href="/">Prelaunch Testing</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>ASO Blog</Footer.Title>
                    <Footer.Link href="/">Blog Home</Footer.Link>
                    <Footer.Link href="/">ASO Landscape</Footer.Link>
                    <Footer.Link href="/">ASO Food for Thought</Footer.Link>
                   
                </Footer.Column>
               
            </Footer.Row>
            </Footer.Wrapper>
            </Footer>
            
   <div className='nav'>
      <BottomNavigation sx={{ maxWidth:"100%", justifyContent:"space-around", display:"flex", alignItems:"center", textAlign:'center' }} >
        
       
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
             
             
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              
              color: "violet",
              textDecoration: "none"
            }}
          >
            Feedback
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
             
              color: "violet",
              textDecoration: "none"
            }}
          >
            Privacy Policy
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
             
              color: "violet",
              textDecoration: "none"
            }}
          >
            Cookie Policy
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
             
              color: "violet",
              textDecoration: "none"
            }}
          >
            Terms of Service
          </Typography>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
             
              color: "violet",
              textDecoration: "none"
            }}
          >
            DPA
          </Typography>
         
          </BottomNavigation>       
          </div>
        </ThemeProvider>
    )
}