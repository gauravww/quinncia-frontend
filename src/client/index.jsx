import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import App from './App';
import configureStore from './redux/configureStore';


const renderApp = (Component) => render(
  <AppContainer>
    <Provider store={configureStore}>
      <Component />
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
);

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(App);
  });
}
