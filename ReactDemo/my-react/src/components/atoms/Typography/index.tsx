import React from 'react';
import {Typography as MuiTypography , TypographyProps} from '@mui/material'

interface TypoProps extends TypographyProps{
    

}

const Typography : React.FC<TypoProps> = ({ ...props}) => {
    return(
        <MuiTypography  {...props} />
    )
}
export default Typography
