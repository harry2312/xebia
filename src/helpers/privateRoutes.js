import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const info = useSelector((state) => state.login);

  return (
    <Route
      {...rest}
      render={(props) =>
        info && info.user && info.user.name ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
};

// _swtoken treating as unique auth token recieved from server
