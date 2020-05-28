import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';

import ShowcasePage from '../ShowcasePage';
import CollectionPage from '../CollectionPage';

const Shop = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:gender(mens|womens)`} exact>
        <ShowcasePage />
      </Route>
      <Route path={`${path}/:gender(mens|womens)/:category`} exact>
        <CollectionPage />
      </Route>
      <Redirect to='/' />
    </Switch>
  );
};

export default Shop;