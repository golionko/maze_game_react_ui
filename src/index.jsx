import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from "redux";
import {Provider} from "react-redux";
import MainView from "./pages/MainView/MainView";
import rootReducer from './store/reducers'


const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <MainView />
    </Provider>
    , document.getElementById('root'));

