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
    exact: true,
    component: Views.HomeView,
  },
];

export default routes;
