import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Carrinho from '../pages/Carrinho';
import Home from '../pages/Home';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/carrinho-de-compras" component={ Carrinho } />
        <Route exact path="/" component={ Home } />
      </Switch>
    );
  }
}

export default Content;
