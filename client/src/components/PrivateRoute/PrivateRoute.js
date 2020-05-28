import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser, selectIsOnBootAuthVerified } from '../../redux';

const PrivateRoute = props => {
  const user = useSelector(selectUser);
  const isOnBootAuthVerified = useSelector(selectIsOnBootAuthVerified);

  if (!isOnBootAuthVerified) {
    return null;
  }

  if (!user) {
    return <Redirect to='/' />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;