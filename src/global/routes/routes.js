import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Error from '../pages/Error';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Dashboard} />
      <Route exact path='/error' component={Error} />
      <Route render={() => <Redirect to={{ pathname: '/error' }} />} />
    </Switch>
  );
};

export default Routes;
