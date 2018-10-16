import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CreateTierListPage from '../components/CreateTierListPage';
import ViewTierListPage from '../components/ViewTierListPage';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import LandingPage from '../components/LandingPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import EditTierListPage from '../components/EditTierListPage';
import ViewUserTierListPage from '../components/ViewUserTierListPage';
import UpdateTierListPage from '../components/UpdateTierListPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PublicRoute path="/login" component={LoginPage} exact={true} />
        <PrivateRoute path="/create" component={CreateTierListPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <PrivateRoute path="/view/:id" component={ViewTierListPage} />
        <PrivateRoute path="/edit/:id" component={EditTierListPage} />
        <PrivateRoute path="/viewTierList/:id" component={ViewUserTierListPage} />
        <PrivateRoute path="/update/:id" component={UpdateTierListPage} /> 
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
