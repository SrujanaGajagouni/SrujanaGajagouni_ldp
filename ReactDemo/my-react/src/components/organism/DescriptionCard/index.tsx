import React from "react";
import Typography from "../../atoms/Typography";
import { Stack } from '@mui/material';
import Image from "../../atoms/Image";
import CommuteRoutes from "../../molecules/CommuteRoutes";
import '../../../../public/assets/icons/hp.svg';
import '../../../../public/assets/icons/more.svg';
import './index.css'; 

const DescriptionCard: React.FC = () => {
    return (
            <Stack className="main-container">
                <Stack className="sub-container">
                    <Stack className="header-row">
                        <Image src="/assets/icons/hp.svg" alt="Hp" id='hp'/>
                        <Image src="/assets/icons/more.svg" alt="More" id='more' />
                    </Stack>
                    <Stack className="text-column">
                        <Typography variant="subtitle1">User Experience Designer</Typography>
                        <Typography variant="caption" className="text-caption-primary">HP</Typography>
                        <Typography variant="caption" className="caption-2" >Hyderabad, Telangana, India</Typography>
                    </Stack>
                    <CommuteRoutes />
                </Stack>
            </Stack>
    );
}

export default DescriptionCard;
