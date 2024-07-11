import React from "react";
import TextComponent from "../../atoms/Typography";
import { Stack, ThemeProvider, createTheme } from '@mui/material';
import ImageComponent from "../../atoms/Image";
import ImageCard from "../../molecules/FooterImage";
import hp from '../../../../public/assets/hp.svg';
import more from '../../../../public/assets/more.svg';
import './index.css'; 

const theme = createTheme({
    typography: {
        subtitle1: {
            color: '#373C38',
            lineHeight: 1.5,
        },
        
    },
});

const Main: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Stack className="main-container">
                <Stack className="sub-container">
                    <Stack className="header-row">
                        <ImageComponent src={hp} alt="Hp" id='hp'/>
                        <ImageComponent src={more} alt="More" id='more' />
                    </Stack>
                    <Stack className="text-column">
                        <TextComponent variant="subtitle1">User Experience Designer</TextComponent>
                        <TextComponent variant="caption" className="text-caption-primary">HP</TextComponent>
                        <TextComponent variant="caption" className="caption-2" >Hyderabad, Telangana, India</TextComponent>
                    </Stack>
                    <ImageCard />
                </Stack>
            </Stack>
        </ThemeProvider>
    );
}

export default Main;
