import React from 'react';
import Routes from './Routes';
import {history} from '../../util/history'
import Header from '../../components/Header/Header';
import {Router} from 'react-router-dom';

const MainView = () =>  (
        <Router history={history}>
            <div className="main-view">
              <Header />
              <Routes history={history}/>
            </div>
        </Router>
    )

export default MainView;
