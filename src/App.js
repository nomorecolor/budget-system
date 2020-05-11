import React, { createElement } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.scss'

import { Navbar } from './navbar'
import {
  LoginPage,
  DashboardPage,
  CostCenterPage,
  OperatingExpensePage,
  CapitalExpenditurePage,
  OtherStaffExpensePage,
  DetailedPage,
  ConsolidatedPage
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={LoginPage} exact />
        <RouteWithLayout path='/cc' component={CostCenterPage} exact />
        <RouteWithLayout path='/cc/oe' component={OperatingExpensePage} exact />
        <RouteWithLayout path='/cc/ce' component={CapitalExpenditurePage} exact />
        <RouteWithLayout path='/cc/ose' component={OtherStaffExpensePage} exact />
        <RouteWithLayout path='/rev' component={DashboardPage} exact />
        <RouteWithLayout path='/rev/det' component={DetailedPage} exact />
        <RouteWithLayout path='/rev/con' component={ConsolidatedPage} exact />
        <RouteWithLayout path='/fse' component={DashboardPage} exact />
        <RouteWithLayout path='/oth' component={DashboardPage} exact />
        <RouteWithLayout path='/rep' component={DashboardPage} exact />
        <RouteWithLayout path='/adm' component={DashboardPage} exact />
      </Switch>
    </Router >
  );
}

const RouteWithLayout = ({ component, ...rest }) => {
  return (
    <div>
      <Navbar />
      <Route {...rest} render={() => createElement(component)} />
    </div>
  );
};

export default App;
