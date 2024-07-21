import { createTheme } from "@mui/material";

const theme= createTheme({
    typography: {
        fontFamily: 'Graphik, sans-serif',
        body1: {
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',
            letterSpacing: '0.01em',
            textAlign: 'left',
            color: '#343446',

        },
        caption: {
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '22px',
            letterSpacing: '0.01em',
            textAlign: 'left',
            color: '#7D7D89',

        },
        subtitle1: {
            fontSize: '20px',
            fontWeight: '550',
            lineHeight: '30px',
            letterSpacing: '0.005em',
            textAlign: 'left',
            color: '#343446',
            paddingLeft: '10px',

        }

    }
})
export default theme

