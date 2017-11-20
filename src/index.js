import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import BasicLayout from './layouts/BasicLayout';

const render = (RootElement) => {
  ReactDOM.render(
    <AppContainer>
      <RootElement/>
    </AppContainer>
    , document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./layouts/BasicLayout', () => {
    const BasicLayout = require('./layouts/BasicLayout').default;
    render(BasicLayout);
  });
}

render(BasicLayout);
