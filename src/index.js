import React from 'react';
import ReactDOM from 'react-dom';
import './global.scss';
import { BrowserRouter, Route } from "react-router-dom";

import * as serviceWorker from './serviceWorker';
import Profile from './pages/Profile';
import Home from './pages/Home';
import 'antd/dist/antd.css';
import Router from './Router';
import { createHashHistory } from 'history';

const history = createHashHistory()

ReactDOM.render(
  <React.StrictMode>
    <Router history={history} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export { history }
