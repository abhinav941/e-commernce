import React,{ Component } from 'react';
import HomePage from './container/HomePage';
import Login from './components/Login';
import Spinner from './components/Spinner';
import ProductStack from './components/ProductStack';

import { Route,Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
        <Route path="/"  component={HomePage}/>
        {/* <Route path="/sign-up" component={Registration} /> */}
        </Switch>
        <Route path="/login" component={Login} />
        <ProductStack/>
        <Spinner/>
      </div>
    );
  }
}

export default App;
