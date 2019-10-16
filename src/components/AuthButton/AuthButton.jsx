import React from 'react';
import {Button} from 'react-bootstrap';
import { connect } from "react-redux";
import logout from '../../store/actions/logout'

class AuthButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout () {
        this.props.logout();
    }
    
    render () {
        return this.props.logged ? (
            <Button href="/" onClick={this.handleLogout}>Sign out</Button>
        ) : (
            <Button href="/login" className="mr-5" variant="outline-success">Log In</Button>
        )
    }
};

export default connect(null, {logout})(AuthButton);