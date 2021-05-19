import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signinUser } from '../actions';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    signIn = () => {
        const info = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.signinUser(info, this.props.history);
    }

    editEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    }

    editPassword = (e) => {
        this.setState({
            password: e.target.value,
        });
    }

    render() {
        return (
            <div id="signin-form">
                <h1>Sign in to an existing account</h1>

                <h2>Your email:</h2>
                <input type="text" value={this.state.email} onChange={this.editEmail} />

                <h2>Your password:</h2>
                <input type="text" value={this.state.password} onChange={this.editPassword} />

                <NavLink to="/">
                    <i role="button" tabIndex={0} aria-label="Sign in button" className="fas fa-arrow-alt-circle-right" onClick={this.signIn} />
                </NavLink>
            </div>
        );
    }
}

export default connect(null, { signinUser })(SignIn);