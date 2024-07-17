import React from "react";
import { Stack } from "@mui/material";
import Image from "../../atoms/Image";
import Typography from "../../atoms/Typography";
import './index.css'; 


const CommuteRoutes: React.FC = () => {
    return (
            <Stack className="container">
                <Stack className="title">
                    <Typography variant='caption'>Commute routes available :</Typography>
                </Stack>
                <Stack className="image-row">
                    <Stack className="image-container">
                        <Image src="/assets/icons/bike.svg" alt='bike' />
                        <Image src="/assets/icons/bus.svg" alt='bus' />
                        <Image src="/assets/icons/car.svg" alt='car' />
                        <Image src="/assets/icons/train.svg" alt='train' />
                    </Stack>
                    <Stack className="time">
                        <Typography variant='caption' >1hr 36 mins ago</Typography>   
                    </Stack>
                    
                </Stack>
            </Stack>
    );
}

export default CommuteRoutes;
