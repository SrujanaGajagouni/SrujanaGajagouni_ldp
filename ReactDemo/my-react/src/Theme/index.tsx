import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
        subtitle1: {
            fontFamily: 'Montserrat, sans-serif', 
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '24px',
            textAlign: 'left',
            color: '#373C38'
        },
        caption: {
            fontFamily: 'Montserrat, sans-serif', 
            fontWeight: 500,
            lineHeight: '16px',
            fontSize: '12px',
        }
    },
});

export default theme;
