import { useRoutes, Navigate } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import ReactApp from '../pages/reactApp';
import ReactTest from '../pages/reactApp/ReactTest';

import VueApp from '../pages/vueApp';
import VueTest from '../pages/vueApp/VueTest';

import type { RouteObject } from 'react-router-dom';

const route: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to={'/home'} />,
  },
  {
    path: '/home',
    element: <Welcome />
  },
  {
    path: '/react-app',
    element: <ReactApp />,
    children: [
      {
        path: '/react-app/test1',
        element: <ReactTest />
      },
      {
        path: '/react-app/test2',
        element: <ReactTest />
      },
      {
        path: '/react-app/test3',
        element: <ReactTest />
      }
    ]
  },
  {
    path: '/vue-app',
    element: <VueApp />,
    children: [
      {
        path: '/vue-app/test1',
        element: <VueTest />
      },
      {
        path: '/vue-app/test2',
        element: <VueTest />
      },
      {
        path: '/vue-app/test3',
        element: <VueTest />
      }
    ]
  }
];

export default function RoutesConf() {
  return useRoutes(route);
};