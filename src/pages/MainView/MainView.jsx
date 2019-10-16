import React from 'react';
import { Routes } from './Routes';
import {history} from '../../util/history'
import Navigation from '../../components/NavBar/NavBar';
import { connect } from "react-redux";
import { Router } from 'react-router-dom';

class MainView extends React.Component {

  render() {
    return (
        <Router history={history}>
            <div className="main-view">
              <Navigation logged={this.props.logged}/>
              <Routes history={history}/>
            </div>
        </Router>
    )
  }
}

const mapStateToProps = state => {
  const { logged } = state;
  return { logged };
};

export default connect(mapStateToProps)(MainView);
