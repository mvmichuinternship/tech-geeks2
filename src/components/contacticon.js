import * as React from 'react';
import Stack from '@mui/material/Stack';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { blue, green, purple } from '@mui/material/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from '@mui/material/IconButton';

export default function Contacticon() {
    return (
      <div>
        <Stack direction="row" >
<IconButton  href='https://www.facebook.com/mhrdInnovation/'> <WhatsAppIcon sx={{ color: green[500] , width: 60, height: 60}}></WhatsAppIcon></IconButton>
<IconButton href='https://www.facebook.com/mhrdInnovation/'> <FacebookIcon sx={{ color: blue[900] , width: 60, height: 60}}></FacebookIcon></IconButton>
<IconButton href= 'https://www.instagram.com/mhrd.innovationcell/'> <InstagramIcon sx={{ color:purple[700] , width: 60, height: 60}}></InstagramIcon></IconButton>
<IconButton href= 'https://twitter.com/SIH2022_MIC'> <TwitterIcon sx={{ color: blue[500] , width: 60, height: 60}}></TwitterIcon></IconButton>
        </Stack>
      </div>
    );
}