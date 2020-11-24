import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Config } from './config';

const PrimaryLayout = () => <BrowserRouter>{renderRoutes(Config)}</BrowserRouter>;

export default PrimaryLayout;
