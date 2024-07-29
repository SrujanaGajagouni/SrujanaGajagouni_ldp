import React from 'react';

interface ImageComponentProps extends React.ImgHTMLAttributes<HTMLImageElement>{}
const ImageComponent : React.FC<ImageComponentProps> = ({...props}) => {
    return(<img {...props} />)
}
export default ImageComponent