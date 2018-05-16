import React from 'react';
import ReactDOM from 'react-dom';
import './res/styles/index.css';
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
