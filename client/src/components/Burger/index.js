import React from 'react';
import { BurgerStyle } from './style';

const Burger=(props)=>{
    
    return(
        <BurgerStyle onClick={props.click}>
            <div></div>
            <div></div>
            <div></div>
        </BurgerStyle>
    )
}

export default Burger;