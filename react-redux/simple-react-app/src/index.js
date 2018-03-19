import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/main/index.jsx';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
