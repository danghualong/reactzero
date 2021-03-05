import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { Provider } from 'react-redux';
import stateStore from "./store"
import 'antd/dist/antd.css';
import "./index.css"

ReactDOM.render(
  <Provider store={stateStore}>
    <Routes></Routes>
  </Provider>,
  document.getElementById('root')
);