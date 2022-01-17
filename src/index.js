import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalProvider } from './context/Global';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalProvider>
      <App />
    </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
