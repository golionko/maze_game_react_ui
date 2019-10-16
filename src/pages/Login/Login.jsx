import React from 'react';
import { Redirect } from 'react-router-dom';
import login from '../../store/actions/login'
import { connect } from "react-redux";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            redirectToHome: false
        };
    }
    
    handleLogin = () =>  {
        this.props.login();
        this.setState({redirectToHome: true});
    }

    render () {
        return (this.state.redirectToHome ) ?
            ( <Redirect to={"/"} /> )
        :
            (
              <div>
                <p>You must log in to view the page</p>
                <button onClick={this.handleLogin}>Log in</button>
              </div>
            );
      }
}

export default connect(null, {login})(Login);