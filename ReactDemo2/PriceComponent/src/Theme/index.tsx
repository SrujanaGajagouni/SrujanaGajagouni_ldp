import { createTheme } from "@mui/material";

const theme= createTheme({
    typography: {
        body1: {
            
            font: 'Graphik',
            fontSize: '16px',
            fontWeight: '600',
            lineHeight: '22px',
            letterSpacing: '0.01em',
            textAlign: 'left',
            color: '#343446',

        },
        caption: {
            font: 'Graphik',
            fontSize: '16px',
            fontWeight: '400',
            lineHeight: '22px',
            letterSpacing: '0.01em',
            textAlign: 'left',
            color: '#7D7D89',

        },
        subtitle1: {
            font: 'Graphik',
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

