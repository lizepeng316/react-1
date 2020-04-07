import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './todolist/app';
// import {render} from './store/store'
import {Provider} from 'react-redux';
import {store} from './store/store';
import AppRedux from './redux/appredux';


ReactDOM.render(
    <Provider store={store}>
        <App/>
        <AppRedux />
    </Provider>,
     document.getElementById('root'))
