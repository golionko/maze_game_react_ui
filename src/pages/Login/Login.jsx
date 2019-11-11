import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { performUserLogin } from '../../store/actions/login';
import { useDispatch } from 'react-redux';
import {Form, Button} from 'react-bootstrap'
 
const Login = () => {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const dispatch = useDispatch()

    const handleLogin = (event) =>  {
        event.preventDefault();   
        dispatch(performUserLogin({ username: event.target.username.value , password: event.target.password.value}));
        setRedirectToHome(true);
    }

    return (redirectToHome ) ? ( <Redirect to={"/"} /> )
            : (
                <Form onSubmit={handleLogin} className="w-25 p-3">
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter Username" />
                        <Form.Text className="text-muted">
                            Please enter the username you recieved on registration.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <span> Or </span>  <Link to="/signup">register now!</Link>
                </Form>
            );
}

export default Login;