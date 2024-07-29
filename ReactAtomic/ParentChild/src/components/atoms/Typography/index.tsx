import React from "react";
import {Typography, TypographyProps} from '@mui/material'

interface TextProps extends TypographyProps{
    label : string;
}
const TextComponent : React.FC<TextProps> = ({label, ...props}) => {
    return (<Typography {...props}>{label}</Typography>)
}

export default TextComponent