import React from 'react';
import './ProductStack.css';
import ProductItem from './ProductItem/ProductItem';
import { Component } from 'react';
import axios from 'axios';

class productStack extends Component {
  state = {
    imageUrl: [],
  };
  componentDidMount() {
    axios.get('http://localhost:8080/images').then((response) => {
      this.setState({ imageUrl: response.data.image_url });
      console.log(response.data.image_url);
    });
  }
  render() {
    let products = null;
    if (this.state.imageUrl) {
      products = this.state.imageUrl.map((image) => {
        return <ProductItem className="grid_item" key={image.url} url={image.url} price={image.price} />;
      });
    }
    return <div className="stack">{products}</div>;
  }
}

export default productStack;
