import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { store } from 'store';
import { Provider } from 'react-redux';
import { Config } from './config';

const PrimaryLayout = () => (
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Config)}</BrowserRouter>
  </Provider>
);

export default PrimaryLayout;
