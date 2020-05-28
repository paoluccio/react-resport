import React from 'react';
import { Route, useRouteMatch, Switch, useLocation, Redirect } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';

import styles from './Auth.module.scss';
import SignInPage from '../SignInPage';
import SignUpPage from '../SignUpPage';
import FadeTransition from '../shared/animations/FadeTransition';

const Auth = () => {
  const { path } = useRouteMatch();
  const location = useLocation();

  return (
    <div className={styles.auth}>
      <div className={styles.container}>
        <TransitionGroup component={null}>
          <FadeTransition
            key={location.pathname}
            timeout={350}
            mode='scale3'
          >
            <div className={styles.content}>
              <Switch location={location}>
                <Route path={`${path}/signin`} exact>
                  <SignInPage />
                </Route>
                <Route path={`${path}/signup`} exact>
                  <SignUpPage />
                </Route>
                <Redirect to={`${path}/signin`} />
              </Switch>
            </div>
          </FadeTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Auth;