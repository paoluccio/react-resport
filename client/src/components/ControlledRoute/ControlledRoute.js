import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectIsOnBootAuthVerified, selectUser, selectRedirectPath } from '../../redux';
import { setRedirectPath } from '../../redux/auth/authSlice';

const ControlledRoute = props => {
  const user = useSelector(selectUser);
  const redirectPath = useSelector(selectRedirectPath);
  const isOnBootAuthVerified = useSelector(selectIsOnBootAuthVerified);

  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setRedirectPath('/'));
  }, [dispatch]);

  if (!isOnBootAuthVerified) {
    return null;
  }

  if (user) {
    return <Redirect to={redirectPath} />;
  }

  return <Route {...props} />;
};

export default ControlledRoute;