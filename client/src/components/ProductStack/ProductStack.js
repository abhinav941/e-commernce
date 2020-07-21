import React from 'react';
import ProductItem from './ProductItem/ProductItem';
import { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Stack=styled.div`
display: grid;
position: absolute;
top:100px;
left:250px;
grid-template-columns: repeat(5,250px);
grid-auto-rows: minmax(200px,auto);
padding-top: 10px;
`

class productStack extends Component {
  state = {
    imageUrl: [],
  };
  componentDidMount() {
    axios.get('http://localhost:8080/images').then((response) => {
      this.setState({ imageUrl: response.data.image_url });
      // console.log(response.data.image_url);
    });
  }
  render() {
    let products = null;
    if (this.state.imageUrl) {
      products = this.state.imageUrl.map((image) => {
        return <ProductItem className="grid_item" key={image.url} url={image.url} price={image.price} />;
      });
    }
    return <Stack>{products}</Stack>;
  }
}

export default productStack;
