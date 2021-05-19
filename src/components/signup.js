import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { signupUser } from '../actions';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            userName: '',
        };
    }

    signUp = () => {
        const info = {
            email: this.state.email,
            password: this.state.password,
        };
        this.props.signupUser(info, this.props.history);
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

    editUserName = (e) => {
        this.setState({
            userName: e.target.value,
        });
    }

    render() {
        return (
            <div id="signin-form">
                <h1>Sign up for a new account</h1>

                <h2>Your username:</h2>
                <input type="text" value={this.state.userName} onChange={this.editUserName} />

                <h2>Your email:</h2>
                <input type="text" value={this.state.email} onChange={this.editEmail} />

                <h2>Your password:</h2>
                <input type="text" value={this.state.password} onChange={this.editPassword} />

                <NavLink to="/signUp">
                    <i role="button" tabIndex={0} aria-label="Sign up button" className="fas fa-arrow-alt-circle-right" onClick={this.signUp} />
                </NavLink>

            </div>
        );
    }
}

export default connect(null, { signupUser })(SignUp);
