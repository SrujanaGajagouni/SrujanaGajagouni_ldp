import React from "react";
import TextComponent from "../../atoms/Typography";
import { Stack } from "@mui/material";
import ButtonComponent from "../../atoms/Button";
import './index.css';


const Footer : React.FC = () => {
    return(
            <Stack direction='column'>
                <Stack direction='row' spacing={7}>
                    <TextComponent label='Total Payout' variant='body1' ></TextComponent>
                    <TextComponent label='$253,442.50' variant='h4'></TextComponent>
                </Stack>
                <Stack >
                    <ButtonComponent label='Review Your Credit' variant='contained' color='primary' id='buttonStyle'/>
                </Stack>
            </Stack>
      
    )
}
export default Footer