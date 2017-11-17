import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import DevTools from "./DevTools";
import AppRoute from "../../core/appRoute";

import App from "../app/App";
import Login from "../auth/login/Login";

import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Switch>
                <AppRoute exact path="/" layout={AppLayout} component={App} />
                <AppRoute exact path="/auth/login" layout={AuthLayout} component={Login} />
            </Switch>
            <DevTools />
        </div>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;
