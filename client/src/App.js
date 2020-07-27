import React from 'react';
import { Component } from 'react';
import Nav from './components/NavBar';
import SideBar from './components/SideBar';
import ProductStack from './components/ProductStack';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import { BrowserRouter,Route } from 'react-router-dom';

class App extends Component {
  state = {
    toggle: true,
  };
  toggleHandler = () => {
    console.log(this.state.toggle);
    this.setState((prevState, prevprops) => ({ toggle: !prevState.toggle }));
  };
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Nav toggle={this.toggleHandler} />
        <SideBar show={this.state.toggle} />
        <ProductStack />
        {/* <Login/> */}
        {/* <Route path="/login" component={Login} /> */}
        {/* <Route path="/sign-up" component={Registration} /> */}
        {/* <Registration/> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
