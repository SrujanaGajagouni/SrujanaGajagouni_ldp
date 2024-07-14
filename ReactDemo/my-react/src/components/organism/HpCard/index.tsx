import React from "react";
import Typography from "../../atoms/Typography";
import { Stack } from '@mui/material';
import Image from "../../atoms/Image";
import ImageCard from "../../molecules/FooterImage";
import hp from '../../../../public/assets/icons/hp.svg';
import more from '../../../../public/assets/icons/more.svg';
import './index.css'; 

const HpCard: React.FC = () => {
    return (
            <Stack className="main-container">
                <Stack className="sub-container">
                    <Stack className="header-row">
                        <Image src={hp} alt="Hp" id='hp'/>
                        <Image src={more} alt="More" id='more' />
                    </Stack>
                    <Stack className="text-column">
                        <Typography variant="subtitle1">User Experience Designer</Typography>
                        <Typography variant="caption" className="text-caption-primary">HP</Typography>
                        <Typography variant="caption" className="caption-2" >Hyderabad, Telangana, India</Typography>
                    </Stack>
                    <ImageCard />
                </Stack>
            </Stack>
    );
}

export default HpCard;
