import { useRoutes } from 'react-router-dom';

import Test1 from '../pages/Test1';
import Test2 from '../pages/Test2';
import Test3 from '../pages/Test3';

import type { RouteObject } from 'react-router-dom';

const route: RouteObject[] = [
  {
    path: '/react-app/test1',
    element: <Test1 />,
  },
  {
    path: '/react-app/test2',
    element: <Test2 />,
  },
  {
    path: '/react-app/test3',
    element: <Test3 />,
  },
];

export default function RoutesConf() {
  return useRoutes(route);
};