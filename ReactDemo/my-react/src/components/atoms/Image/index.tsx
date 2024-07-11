import React from 'react';

interface ImageProp extends React.ImgHTMLAttributes<HTMLImageElement>{}

const ImageComponent : React.FC<ImageProp> = ({...props}) => {
    return(
        <img {...props} />
    )
}

export default ImageComponent