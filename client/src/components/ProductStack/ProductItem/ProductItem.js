import React from 'react';
// import './ProductItem.css';
import styled from 'styled-components';

const Product=styled.div`
width: 100%;
height: 100%;
img{
    width: 220px;
    height: 150px;
    margin: auto;
}
`

const productItem=(props)=>{
    return(
        <Product className="item">
            <div>
                <img src={props.url} alt="product_image" />
                <h3>Price : {props.price}</h3>
            </div>
        </Product>
    )
}

export default productItem; 