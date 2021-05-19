import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Child, ...props }) => {
    return (
        <Route
            {...props}
            render={(routeProps) => (props.authenticated ? (
                <Child {...routeProps} />
            ) : (
                <Redirect to="/signIn" />
            ))}
        />
    );
};

// map authenticated to reduxState.auth.authenticated
const mapStateToProps = (reduxState) => {
    return { authenticated: reduxState.auth.authenticated };
};

export default withRouter(connect(mapStateToProps, null)(PrivateRoute));
