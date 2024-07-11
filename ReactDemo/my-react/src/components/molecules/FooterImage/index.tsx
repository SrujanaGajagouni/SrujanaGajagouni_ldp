import React from "react";
import bike from '../../../../public/assets/bike.svg';
import bus from '../../../../public/assets/bus.svg';
import car from '../../../../public/assets/car.svg';
import train from '../../../../public/assets/train.svg';
import { Stack, ThemeProvider, createTheme } from "@mui/material";
import ImageComponent from "../../atoms/Image";
import TextComponent from "../../atoms/Typography";
import './index.css'; 

const theme = createTheme({
    typography: {
        caption: {
            color: '#373C38',
        },
    },
});

const ImageCard: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <Stack className="container">
                <Stack className="title">
                    <TextComponent variant='caption'>Commute routes available :</TextComponent>
                </Stack>
                <Stack className="image-row">
                    <Stack className="image-container">
                        <ImageComponent src={bike} alt='bike' />
                        <ImageComponent src={bus} alt='bus' />
                        <ImageComponent src={car} alt='car' />
                        <ImageComponent src={train} alt='train' />
                    </Stack>
                    <Stack className="time">
                        <TextComponent variant='caption' >1hr 36 mins ago</TextComponent>   
                    </Stack>
                    
                </Stack>
            </Stack>
        </ThemeProvider>
    );
}

export default ImageCard;
