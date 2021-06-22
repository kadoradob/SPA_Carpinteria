import React , {useContext}  from "react";
import { Route,BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { AuthContext } from "../components/auth/AuthContext";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";


export const AppRouter = () => {

  const { user } = useContext(AuthContext)

  return (
    <Router>
      <div>
        <Switch>
            {/* <Route exact path="/login" component={  LoginScreen }></Route> */}
            <Route path="/" component={  DashboardRoutes }></Route>

            <Redirect path="/vertical" ></Redirect>
        </Switch>
      </div>
    </Router>
  );
};
