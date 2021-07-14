import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router >
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact={route.exact}
            path={`${route.path}`}
            component={route.component}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default App;
