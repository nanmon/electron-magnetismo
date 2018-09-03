import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './app.global.scss';
import Routes from './Routes';

render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./Routes', () => {
    const NextRoutes = require('./Routes'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoutes/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
