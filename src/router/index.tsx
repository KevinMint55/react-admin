import React from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import loadable from '@loadable/component';

const Home = loadable(() => import('../pages/Home'));
const Count = loadable(() => import('../pages/Count'));

const PrimaryLayout = () => (
  <BrowserRouter>
    <div className="primary-layout">
      <header>
        <Link to="/">toHome</Link>&emsp;|&emsp;
        <Link to="/count">toCount</Link>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/count" exact component={Count} />
        </Switch>
      </main>
    </div>
  </BrowserRouter>
);

export default PrimaryLayout;
