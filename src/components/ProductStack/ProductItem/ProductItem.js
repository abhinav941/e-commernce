import React from 'react';
import './ProductItem.css';

const productItem=(props)=>{
    return(
        <div className="item">
            <div >
                <img className="img_size" src={props.url} alt="product_image" />
                <h3>Price : {props.price}</h3>
            </div>
        </div>
    )
}

export default productItem; 