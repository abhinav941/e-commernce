import React from 'react';
import ProductItem from './ProductItem';
import { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Stack=styled.div`
display: grid;
position: absolute;
top:100px;
left:250px;
grid-template-columns: repeat(5,240px);
grid-auto-rows: minmax(200px,auto);
grid-column-gap:10px;
grid-row-gap:15px;
// border-bottom:1px solid #bdbdbd;
box-sizing:border-box;
`

class productStack extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios.get('http://localhost:8080/images').then((response) => {
      this.setState({ products: response.data.products });
      // console.log(response.data.image_url);
    });
  }
  render() {
    let products = null;
    if (this.state.products) {
      products = this.state.products.map((product) => {
        return <ProductItem className="grid_item" key={product.url} url={product.url} price={product.price} name={product.name}/>;
      });
    }
    return <Stack>{products}</Stack>;
  }
}

export default productStack;