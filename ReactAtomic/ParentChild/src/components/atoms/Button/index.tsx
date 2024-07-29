import React from "react";
import { Button, ButtonProps } from "@mui/material";

interface ButtonProp extends ButtonProps{
    label : string;
}

const ButtonComponent: React.FC<ButtonProp> = ({label, ...props}) => {
    return(<Button {...props}>{label}</Button>)
}

export default ButtonComponent