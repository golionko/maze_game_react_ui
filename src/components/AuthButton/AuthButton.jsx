import React from 'react';
import {Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import logout from '../../store/actions/logout'
import { useDispatch, useSelector } from 'react-redux';

const AuthButton = () => {
    const dispatch = useDispatch()
    const logged = useSelector(state => state.loginReducer.logged)

    const handleLogout = () => dispatch(logout());

    return logged ?
            ( <Button as={Link} to="/" className="mr-5" variant="outline-primary" onClick={handleLogout}>Sign out</Button> )
         :
            ( <Button as={Link} to="/login" className="mr-5" variant="outline-success">Log In</Button> )
}

export default AuthButton;