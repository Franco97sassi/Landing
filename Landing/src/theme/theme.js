import { createTheme } from '@mui/material/styles';
import 'typeface-montserrat';

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
      fontSize: 40,
    },
    h2: {
      fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h3: {
      fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h4: {
      fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
      fontSize: 20,
    },
    h5: {
      fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
      fontSize: 16,
    },
    h6: {
      fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
      fontSize: 12,
    },
  },
  palette: {
    primary: {
      main: '#00D5FA',
    },
    secondary: {
      main: '#006B7D',
    },
    text: {
      primary: '#666666',
      secondary:'#FFFFFF'
    },
    background:{
        primary:"",
        secondary:"linear-gradient(95.88deg, #70C0B2 0%, #0198B6 29.4%, #007289 81.74%)"
    }
  },
});

export default theme;