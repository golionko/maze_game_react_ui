import React from 'react';
import {Button} from 'react-bootstrap';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import logout from '../../store/actions/logout'

class AuthButton extends React.Component {

    handleLogout = () =>  {
        this.props.logout();
    }

    render () {
        return this.props.logged ?
            ( <Button as={Link} to="/" onClick={this.handleLogout}>Sign out</Button> )
         :
            ( <Button as={Link} to="/login" className="mr-5" variant="outline-success">Log In</Button> )
    }
}

export default connect(null, {logout})(AuthButton);