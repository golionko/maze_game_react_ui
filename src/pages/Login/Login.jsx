import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import login from '../../store/actions/login';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const dispatch = useDispatch()

    const handleLogin = () =>  {
        dispatch(login());
        setRedirectToHome(true);
    }

    return (redirectToHome ) ? ( <Redirect to={"/"} /> )
            : (
                <div>
                    <p>You must log in to view the page</p>
                    <button onClick={handleLogin}>Log in</button>
                </div>
            );
      
}

export default Login;