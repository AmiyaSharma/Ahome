import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { AppContect } from './AppContect';
import Appcontextprovider from './Appcontextprovider';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Appcontextprovider.Provider value="Batman">
    <App />
  </Appcontextprovider.Provider>
);


reportWebVitals();
