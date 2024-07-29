import React from "react";
import TextComponent from "../../atoms/Typography";
import { Stack } from "@mui/material";
import ImageComponent from "../../atoms/Image";
import icon from '../../../../public/assets/icon/i-icon.svg'



interface SummaryProps{}
const Header: React.FC<SummaryProps> = () => {
    return(
        <Stack direction="row" alignItems="center" spacing={1}>
            <TextComponent label='Summary' variant='h3' />
            <ImageComponent src={icon} alt="Icon" style={{width:'33px', height:'33px'}}/>
        </Stack>
    )
}

export default Header