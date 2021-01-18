import { Restaurant } from "@material-ui/icons";
import React from "react";
import { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Signin from ".././components/Signin";
import Board from "../components/Board";
import Move from "../components/Move";
import Header from "../components/Header";
import AuthApi from ".././Utils/AuthApi";

function Routes() {
  return (
    <Switch>
      <RouteRegistration path="/Move" component={Move} />
      <RouteRegistration path="/signin" component={Signin} />
      <RouteRegistration path="/Board" component={Board} />
      <RouteRegistration path="" component={Header} />
    
    </Switch>
  );
}

const RouteRegistration = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);
  return (
    <Route
      {...rest}
      render={(props) =>
        !authApi.auth ? <Component {...props} /> : <Redirect to="/board" />
      }
    />
  );
};

const RouteProtected = ({ component: Component, ...rest }) => {
  const authApi = React.useContext(AuthApi);

  return (
    <Route
      {...rest}
      render={(props) =>
        authApi.auth ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

export default Routes;
