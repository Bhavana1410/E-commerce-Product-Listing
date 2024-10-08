import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductListing} />
      <Route path="/product/:id" component={ProductDetail} />
    </Switch>
  );
};

export default App;
