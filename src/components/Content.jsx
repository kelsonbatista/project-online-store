import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Home from '../pages/Home';
import ProductDetails from './ProductDetails';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/cart" component={ Cart } />
        <Route exact path="/checkout" component={ Checkout } />
        <Route exact path="/" component={ Home } />
        <Route
          exact
          path="/ProductDetails/:id"
          component={ ProductDetails }
        />
      </Switch>
    );
  }
}

export default Content;
