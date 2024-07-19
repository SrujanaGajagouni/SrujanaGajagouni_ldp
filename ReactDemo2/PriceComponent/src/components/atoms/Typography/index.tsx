import React from 'react';
import { Typography as MuiTypography, TypographyProps } from '@mui/material';

interface TypographyProp extends TypographyProps{
    label:string;
    variant: 'body1' | 'subtitle1' | 'caption';
}

const Typography: React.FC<TypographyProp> = ({label,variant,...props}) => {
  return (
    <MuiTypography variant={variant} {...props}>{label}</MuiTypography>
  )
}

export default Typography
