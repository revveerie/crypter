import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App.jsx';

import './styles/index.scss';
import navigationLinkClick from './helpers/menu.jsx';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('app')
);

navigationLinkClick();



