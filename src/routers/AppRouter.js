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
import UseTierListPage from '../components/UseTierListPage';
import ViewUserTierListPage from '../components/ViewUserTierListPage';
import UpdateTierListPage from '../components/UpdateTierListPage';
import GuestRoute from './GuestRoute'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PublicRoute path="/login" component={LoginPage} exact={true} />
        <PrivateRoute path="/create" component={CreateTierListPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <GuestRoute path="/view/:id" component={ViewTierListPage} />
        <PrivateRoute path="/edit/:id" component={UseTierListPage} />
        <GuestRoute path="/viewTierList/:id" component={ViewUserTierListPage} />
        <PrivateRoute path="/update/:id" component={UpdateTierListPage} /> 
        <PublicRoute component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
