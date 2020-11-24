import React from 'react';
import { RouteConfig } from 'react-router-config';
import { Spin } from 'antd';
import loadable from '@loadable/component';

function LoadPage(page: any) {
  const Com = loadable(page);

  const Loading = (
    <Spin
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    />
  );

  const RouteCom = (props: any) => (
    <React.Suspense fallback={Loading}>
      <Com {...props} />
    </React.Suspense>
  );
  return RouteCom;
}

export const Config: RouteConfig[] = [
  {
    path: '/',
    component: LoadPage(() => import('../pages/App')),
    routes: [
      {
        path: '/',
        exact: true,
        component: LoadPage(() => import('../pages/Home')),
      },
      {
        path: '/count',
        component: LoadPage(() => import('../pages/Count')),
      },
    ],
  },
];
