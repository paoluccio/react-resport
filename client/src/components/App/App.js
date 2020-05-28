import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { useAuthListener } from '../../hooks/useAuthListener';
import Layout from '../Layout';
import HomePage from '../HomePage';
import Shop from '../Shop';
import CheckoutPage from '../CheckoutPage';
import ControlledRoute from '../ControlledRoute';
import Auth from '../Auth';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import OrdersPage from '../OrdersPage/OrdersPage';

const App = () => {
  useAuthListener();

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/shop'>
          <Shop />
        </Route>
        <Route path='/checkout'>
          <CheckoutPage />
        </Route>
        <ControlledRoute path='/auth'>
          <Auth />
        </ControlledRoute>
        <PrivateRoute path='/orders'>
          <OrdersPage />
        </PrivateRoute>
        <Redirect to='/' />
      </Switch>
    </Layout>
  );
}

export default App;