import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './index.css';

const Root = document.getElementById('root');

const Test = () => <div className="test">Version:3.0</div>;

ReactDOM.render(
  <Router>
    <Route path='/' component={Test}>
    </Route>
  </Router>,
  Root
);