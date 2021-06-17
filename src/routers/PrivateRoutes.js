import React from "react";
import { Redirect, Route } from "react-router";
import PropTypes from "prop-types";



export const PrivateRoutes = ({
  is_authenticated,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        is_authenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};


PrivateRoutes.propTypes ={
    is_authenticated:PropTypes.bool.isRequired,
    component : PropTypes.func.isRequired
}

