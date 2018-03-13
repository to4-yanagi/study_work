import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './rootReducer';
import Main from './containers/main/main';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const Store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={Store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
