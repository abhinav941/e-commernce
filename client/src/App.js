import React,{ Component } from 'react';
import HomePage from './container/HomePage';
import Login from './components/Login';
import Registration from './components/Registration';
import ProductStack from './components/ProductStack';

import { Route,Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductStack/>        
        <Route path="/"  component={HomePage}/>
        <Switch>
        <Route path="/registration" exact component={Registration} />
        <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;
