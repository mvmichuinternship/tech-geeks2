import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import Chip from '@mui/material/Chip';
import { ThemeProvider } from "@emotion/react";
import { theme } from "./themes";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Stack from '@mui/material/Stack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { blue, green, purple } from '@mui/material/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';





const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [clicked, setClicked]=  React.useState(true);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const pages = [
    "Home",
    "About us",
    "Infrastructure",
    "Admissions",
    "Research",
    "Contact us"
  ];

  

  return (
 <ThemeProvider theme={theme}>
    <AppBar position="fixed" color="violet">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppShortcutIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              paddingRight:"5%",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            TECH GEEKS
          </Typography>

          

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AppShortcutIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "rosana",
              textDecoration: "none"
            }}
          >
            TECH GEEKS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#6867AC",fontWeight: 700, display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
         
          <Box sx={{ flexGrow: 0 }} >
          {/* <Button 
        color="rosana" 
        sx={{ fontWeight: 700 }}
        // label="Login"
        component="a"
        href=""
        variant="contained"
        endIcon={<AccountCircleIcon/>} 
        // clickable
        // avatar={<Avatar src="https://cdn-icons-png.flaticon.com/512/5087/5087579.png"/>}
      >Login
      </Button> */}
       <Stack direction="row" >
<IconButton  href='https://www.facebook.com/mhrdInnovation/'> <WhatsAppIcon sx={{ color: green[500] , width: 45, height: 45}}></WhatsAppIcon></IconButton>
<IconButton href='https://www.facebook.com/mhrdInnovation/'> <FacebookIcon sx={{ color: blue[900] , width: 45, height: 45}}></FacebookIcon></IconButton>
<IconButton href= 'https://www.instagram.com/mhrd.innovationcell/'> <InstagramIcon sx={{ color:purple[700] , width: 45, height: 45}}></InstagramIcon></IconButton>
<IconButton href= 'https://twitter.com/SIH2022_MIC'> <TwitterIcon sx={{ color: blue[500] , width: 45, height: 45}}></TwitterIcon></IconButton>
        </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default ResponsiveAppBar;