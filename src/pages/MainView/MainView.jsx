import React from 'react';
import Routes from './Routes';
import {history} from '../../util/history'
import Header from '../../components/Header/Header';
import {Router} from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar'

const MainView = () =>  (
        <Router history={history}>
            <div className="main-view" style={{height: '100vh', background: '#090000'}}>
              <Header />
              <div className="row ml-5 h-75">
                <div className="col-2 col-sm-6 col-md-3"> <Sidebar /> </div>
                <div className="col-10 col-sm-6 col-md-9"> <Routes history={history}/> </div>
              </div>
            </div>
        </Router>
    )

export default MainView;
