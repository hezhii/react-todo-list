import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';

import store from './redux/store';
import List from './pages/List';

function renderWithHotReload(RootElement) {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        {RootElement}
      </Provider>
    </AppContainer>,
    document.getElementById('app')
  )
}

// 初始化
renderWithHotReload(<List/>);

// 热更新
if (module.hot) {
  module.hot.accept('./pages/List', () => {
    const List = require('./pages/List').default;
    renderWithHotReload(<List/>);
  });
}
