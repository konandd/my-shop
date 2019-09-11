import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SelectedProduct from '../SelectedProduct';
import GoodsList from '../GoodsList';
import Cart from '../Cart';
import App from '../../view/App';

const history = createBrowserHistory();

const Navigation = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </Router>
);
export default Navigation;
