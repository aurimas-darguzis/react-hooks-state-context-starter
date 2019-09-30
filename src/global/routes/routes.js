import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={<div>laba diena</div>} />
      <Route exact path='/error' component={<div>This is error page</div>} />
      <Route render={() => <Redirect to={{ pathname: '/error' }} />} />
    </Switch>
  );
};

export default Routes;
