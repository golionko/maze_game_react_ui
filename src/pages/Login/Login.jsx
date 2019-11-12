import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { performUserLogin } from '../../store/actions/login';
import { useDispatch, useSelector } from 'react-redux';
import {Form, Button} from 'react-bootstrap'
 
const Login = () => {
    const logged = useSelector(state => state.loginReducer.logged)
    const errMsg = useSelector(state => state.loginReducer.errMsg)
    const dispatch = useDispatch()

    const handleLogin = (event) =>  {
        event.preventDefault();   
        dispatch(performUserLogin({ username: event.target.username.value , password: event.target.password.value}));
    }

    if(logged){
        return <Redirect to={"/"} />
    } else {
        return <Form onSubmit={handleLogin} className="w-25 p-3">
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
                    {errMsg ? <p> errMsg </p> : ''}
                </Form> 
    }
}

export default Login;