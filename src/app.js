import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Signup, Signin, Browse } from './pages';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuth } from './hooks';

export default function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTES.BROWSE}
          path={ROUTES.HOME}
          exact
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
