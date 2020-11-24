import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import StartComponent from "./Components/StartComponent";

const Routes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={(routeProps) => <StartComponent {...routeProps} />}
            />
            <Redirect to="/"/>
        </Switch>
    );
};

export default Routes;
