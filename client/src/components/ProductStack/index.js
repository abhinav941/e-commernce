import React from 'react';
import ProductItem from './ProductItem';
import axios from 'axios';
import Spinner from '../Spinner';

import { Component } from 'react';
import { StackStyle } from './style';

class ProductStack extends Component {
  state = {
    products: null,
  };
  componentDidMount() {
    axios.get('http://localhost:8080/images').then((response) => {
      this.setState({ products: response.data.products });
      // console.log(response.data.image_url);
    });
  }
  render() {
    let products = <Spinner/>;
    if (this.state.products) {
      products = this.state.products.map((product) => {
        return <ProductItem className="grid_item" key={product.url} url={product.url} price={product.price} name={product.name}/>;
      });
    }
    return <StackStyle>{products}</StackStyle>;
  }
}

export default ProductStack;
