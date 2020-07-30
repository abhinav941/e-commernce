import React from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';
import Spinner from '../Spinner';
import service from './services';

import { Component } from 'react';
import { StackStyle } from './style';

class ProductStack extends Component {
    state = {
        products: null,
        loading: true,
    };
    async componentWillMount() {
        const data = await service.get();
        this.setState({
            products: data,
            loading: false,
        });
    }
    render() {
        let products = <Spinner />;
        if (!this.state.loading) {
            products = (
                <StackStyle>
                    {this.state.products.map(product => {
                        return (
                            <ProductItem
                                className="grid_item"
                                key={product.url}
                                url={product.url}
                                price={product.price}
                                name={product.name}
                            />
                        );
                    })}
                </StackStyle>
            );
        }
        return <>{products}</>;
    }
}

export default ProductStack;
