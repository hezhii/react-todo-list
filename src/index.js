import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Router from './router';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      {Component}
    </AppContainer>
    , document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./router', () => {
    const Router = require('./router').default;
    render(Router());
  });
}

render(Router());
