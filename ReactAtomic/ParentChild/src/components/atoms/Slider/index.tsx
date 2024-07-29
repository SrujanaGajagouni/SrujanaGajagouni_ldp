import React from "react";
import { Slider, SliderProps } from "@mui/material";

interface SliderProp extends SliderProps{

}

const SliderComponent: React.FC<SliderProp> = ({...props}) => {
    return(<Slider {...props} />)
}

export default SliderComponent