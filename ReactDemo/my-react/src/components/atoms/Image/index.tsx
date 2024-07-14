import React from 'react';

interface ImageProp extends React.ImgHTMLAttributes<HTMLImageElement>{}

const Image : React.FC<ImageProp> = ({...props}) => {
    return(
        <img {...props} />
    )
}

export default Image