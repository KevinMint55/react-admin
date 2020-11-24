import React from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';

const App = (props: RouteConfigComponentProps) => {
  const { route } = props;

  return <>{route && renderRoutes(route.routes)}</>;
};

export default App;
