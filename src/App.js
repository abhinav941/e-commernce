import React from 'react';
import { Component } from 'react';
import Nav from './components/nav-bar/Nav';
import SideBar from './components/SideBar/SideBar';
import ProductStack from './components/ProductStack/ProductStack';
import './App.css';

class App extends Component {
  state = {
    toggle: false,
  };
  toggleHandler = () => {
    console.log(this.state.toggle);
    this.setState((prevState, prevprops) => ({ toggle: !prevState.toggle }));
  };
  render() {
    return (
      <div className="App">
        <Nav toggle={this.toggleHandler} />
        <SideBar show={this.state.toggle} />
        <ProductStack />
      </div>
    );
  }
}

export default App;
