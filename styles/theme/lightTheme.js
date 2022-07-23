import { createTheme } from '@mui/material/styles';
import { blueGrey,teal } from '@mui/material/colors';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background:{
      superDark:teal[50]
     },
     common:{
      superDark:teal[50]
     },
     textColor:{
      superDark:teal[800]
     },
     paperColor:{
      superDark:'white'
     },
     fontFamily:[ 
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',

   background:{
    superDark:blueGrey[900]
   },
   common:{
    superDark:teal[900]
   }, 
   textColor:{
    superDark:teal[100],
   },
   paperColor:{
    superDark:'#070707'
   },
  },
});

const Theme = {lightTheme,darkTheme};

export default Theme;