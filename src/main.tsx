import React from 'react';
import ReactDOM from 'react-dom';
import Framework from './framework';
import { Provider } from 'react-redux';
import stateStore from "./store"


ReactDOM.render(
  <Provider store={stateStore}>
    <Framework></Framework>
  </Provider>
  ,
  document.getElementById('root')
);