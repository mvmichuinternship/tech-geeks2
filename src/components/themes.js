import React from "react";
import { createMuiTheme } from "@mui/material";

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { createGlobalStyle } from "styled-components";



 export const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#7289da',
            darker: '#053e85',
        },
        hello: {
            main: '#6E85B7',
            darker: '#053e85',
            contrastText: '#fff'
        },
        rosana: {
            main: '#6E85B7',
            darker: '#053e85',
            contrastText: '#fff',
        },
        neutral: {
            main: '#d1a4e5',
            contrastText: '#fff',
        },
        violet: {
            main: '#C4D7E0',
            contrastText: '#6867AC',
        }

    },
})


// export const hello = createMuiTheme({
//     overrides: {
//       MuiCssBaseline: {
//         "@global": {
//           "*::-webkit-scrollbar": {
//             width: "10px"
//           },
//           "*::-webkit-scrollbar-track": {
//             background: "#E4EFEF"
//           },
//           "*::-webkit-scrollbar-thumb": {
//             background: "#1D388F61",
//             borderRadius: "2px"
//           }
//         }
//       }
//     }
//   });




export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;