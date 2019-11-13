import React from 'react';
import Home from '../Home/Home';
import { RoomView } from '../RoomView/RoomView';
import Login from '../Login/Login';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute'
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
        <Switch  >
            <Route exact path="/"><Home /></Route>
            <Route path="/home"><Home /></Route>
            <Route path="/login" ><Login/></Route>
            <PrivateRoute path='/roomView' component={RoomView} />
        </Switch>
    )

export default Routes;