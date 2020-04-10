import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {render} from './store/store'
import {Provider} from 'react-redux';
import {store} from './store/store';
import AppRedux from './redux/appredux';
import listRedux from './redux/listredux';
import {BrowserRouter as Router,Route,} from "react-router-dom";


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route path='/redux' component={AppRedux}/>
            <Route path='/list' component={listRedux}/>
        </Provider>
    </Router>,
     document.getElementById('root'))
