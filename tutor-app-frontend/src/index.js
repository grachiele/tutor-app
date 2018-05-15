import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports.js'

Amplify.configure(awsmobile);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
registerServiceWorker();
