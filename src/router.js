import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BasicLayout from './layouts/BasicLayout';
import UserLayout from './layouts/UserLayout';

function RouterConfig() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BasicLayout} />
        <Route path="/user" component={UserLayout} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
