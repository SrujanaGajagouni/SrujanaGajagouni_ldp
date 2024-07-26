import React from 'react';
interface ImageProp{
    src:string;
    alt:string;
}

const Image:React.FC<ImageProp> = ({src,alt}) => {
  return (
    <img src={src} alt={alt} />
  )
}

export default Image
