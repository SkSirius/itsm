import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import Root from './components/root/Root';
import registerServiceWorker from './core/registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Router>
        <Root store={store} />
    </Router>, 
    document.getElementById('root')
);

// Serve assets from local cache
registerServiceWorker();
