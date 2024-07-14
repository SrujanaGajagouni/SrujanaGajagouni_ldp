import React from "react";
import bike from '../../../../public/assets/icons/bike.svg';
import bus from '../../../../public/assets/icons/bus.svg';
import car from '../../../../public/assets/icons/car.svg';
import train from '../../../../public/assets/icons/train.svg';
import { Stack } from "@mui/material";
import Image from "../../atoms/Image";
import Typography from "../../atoms/Typography";
import './index.css'; 


const ImageCard: React.FC = () => {
    return (
            <Stack className="container">
                <Stack className="title">
                    <Typography variant='caption'>Commute routes available :</Typography>
                </Stack>
                <Stack className="image-row">
                    <Stack className="image-container">
                        <Image src={bike} alt='bike' />
                        <Image src={bus} alt='bus' />
                        <Image src={car} alt='car' />
                        <Image src={train} alt='train' />
                    </Stack>
                    <Stack className="time">
                        <Typography variant='caption' >1hr 36 mins ago</Typography>   
                    </Stack>
                    
                </Stack>
            </Stack>
    );
}

export default ImageCard;
