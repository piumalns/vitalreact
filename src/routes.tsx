import {FC} from 'react';
// layouts
import Homelayouts from './layouts/Homelayouts';

// views
import Views from './modules/Views';

interface RouteItem {
  path?: String
  component?: any
  exact: boolean
}

const routes : Array<RouteItem> = [
  {
    path: "/",
    // layout: Homelayouts,
    exact: true,
    component: Views.HomeView,
  },
];

export default routes;
