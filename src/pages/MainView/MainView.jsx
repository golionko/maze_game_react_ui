import React from 'react';
import {Routes} from './Routes';
import {history} from '../../util/history'
import Navigation from '../../components/NavBar/NavBar';
import {Router} from 'react-router-dom';

const MainView = () =>  (
        <Router history={history}>
            <div className="main-view">
              <Navigation />
              <Routes history={history}/>
            </div>
        </Router>
    )

export default MainView;
