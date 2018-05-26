import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { BrowserRouter } from 'react-router-dom'

Amplify.configure(awsmobile);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
