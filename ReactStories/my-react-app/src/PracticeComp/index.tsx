import React from 'react'
interface ProductProps{
    name: string;
    id: number;
    description: string;
}
const Product: React.FC<ProductProps> = ({name, id, description}) => {
    return(
        <div>
            <h3>{name}</h3>
            <h4>{id}</h4>
            <h5>{description}</h5>
        </div>
    )
}
export default Product