import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6C5DD3',
    },
  },
  typography: {
    body2: {
      color: '#A5A5A6',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    
    h4: {
      color: '#E8E7F0',
    },
  },
  components: {
    
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#6C5DD3',
          height: 8,
          borderRadius: 8,
          marginTop: 1,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#413F4D',
          borderWidth: '1px',
        },
      },
    },
  },
});

export default theme;
