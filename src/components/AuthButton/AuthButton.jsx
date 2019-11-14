import React from 'react';
import {Button} from 'react-bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from "react-router-dom";
import {logout} from '../../store/actions/login'
import { useDispatch, useSelector } from 'react-redux';

const AuthButton = () => {
    const dispatch = useDispatch()
    const logged = useSelector(state => state.loginReducer.logged)
    const user = useSelector(state => state.loginReducer.user)

    const handleLogout = () => dispatch(logout());

    const formatTitle = () => {
      return <a>
         <img className="rounded-circle mr-2" src={user.image} alt="userImage" height="40" width="40" />
      </a>
      
    }; //TODO

    return logged ?
            // ( <Button as={Link} to="/" className="mr-5" variant="outline-primary" onClick={handleLogout}>Sign out</Button> )
            ( <DropdownButton variant="dark" id="dropdown-basic-button" title={formatTitle()} alignRight>
                  <Dropdown.Header>Account</Dropdown.Header>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">My Profile</Dropdown.Item>
                  <Dropdown.Item href="#">Logout</Dropdown.Item>
               </DropdownButton> )
         :
            ( <Button as={Link} to="/login" className="mr-5" variant="outline-success">Log In</Button> )
}

export default AuthButton;