import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import Head from './Head';

ReactDOM.render(
  <React.StrictMode>
    <Head />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  )