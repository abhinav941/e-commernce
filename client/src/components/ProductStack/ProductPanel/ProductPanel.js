import React from 'react';
import './ProductPanel.css';
import styled from 'styled-components';

const Panel=styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 20px;
`

const ProductPanel=(props)=>{    
        return(
            <Panel>
                <ProductItem/>
            </Panel>
        )
    }
export default ProductPanel;