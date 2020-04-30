import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./containers/Login";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import { PrivateRoute } from "./helpers/privateRoutes";
import Layout from "./components/Layout";
import Toolbar from "./components/Toolbar";
import MainNavigation from "./components/MainNavigation";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "./actions/actionTypes";
import "./index.css";

const App = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: LOG_OUT });
  };

  return (
    <Fragment>
      <Layout
        header={
          <Toolbar>
            <MainNavigation onLogout={handleLogout} />
          </Toolbar>
        }
      />
      <Switch>
        <Route exact={true} path="/login" component={Login}></Route>
        <PrivateRoute exact={true} path="/" component={Home}></PrivateRoute>
        <Route exact={true} path="*" component={NotFound}></Route>
      </Switch>
    </Fragment>
  );
};

export default App;
