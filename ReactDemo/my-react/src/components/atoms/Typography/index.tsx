import React from 'react';
import {Typography, TypographyProps} from '@mui/material'

interface TypoProps extends TypographyProps{
    

}

const TextComponent : React.FC<TypoProps> = ({ ...props}) => {
    return(
        <Typography  {...props} />
    )
}
export default TextComponent
