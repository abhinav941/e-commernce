import React from 'react';

import {ProductItemStyle} from './style';
import { HeartFilled } from '@ant-design/icons';

const productItem=(props)=>{
    return(
        <ProductItemStyle>
                <img src={props.url} alt="product_image" />
                <HeartFilled className="i"/>
                <h4>{props.name}</h4>
                <p><b>Rs. {props.price}</b><strike>Rs. {props.price+2000}</strike></p>
        </ProductItemStyle>
    )
}

export default productItem; 