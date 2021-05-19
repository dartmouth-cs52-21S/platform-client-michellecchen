import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
/* eslint-disable react/jsx-props-no-spreading */

const PrivateRoute = ({ component: Child, ...props }) => {
    return (
        <Route
            {...props}
            render={(routeProps) => (props.authenticated ? (
                <Child {...routeProps} />
            ) : (
                <Redirect to="/signin" />
            ))}
        />
    );
};

// map authenticated to reduxState.auth.authenticated
const mapStateToProps = (reduxState) => {
    return { authenticated: reduxState.auth.authenticated };
};

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
