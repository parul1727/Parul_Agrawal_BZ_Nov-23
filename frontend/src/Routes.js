import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import StartComponent from "./Components/StartComponent";
import InsuranceType from "./Components/InsuranceType";
import BusinessName from "./Components/BusinessName";

const Routes = () => {
    return (
        <Switch>
            <Route
                exact
                path="/"
                render={(routeProps) => <StartComponent {...routeProps} />}
            />
            <Route
                exact
                path="/insurance-type"
                render={(routeProps) => <InsuranceType {...routeProps} />}
            />
            <Route
                exact
                path="/business-name"
                render={(routeProps) => <BusinessName {...routeProps} />}
            />
            <Redirect to="/"/>
        </Switch>
    );
};

export default Routes;
