import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component,  ...rest }) => {
    const logged = useSelector(state => state.logged)
    return (
        <Route {...rest} render={(props) => (
            logged
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />
        )} />
    )};

export default PrivateRoute;