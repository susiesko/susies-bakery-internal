import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';

import { scrollListenerStart } from './utils/scroll';

import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/md-light-indigo/theme.css';
import 'primeflex/primeflex.css';
import './css/style.scss';

scrollListenerStart();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
