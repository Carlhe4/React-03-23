import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter } from 'react-router-dom';

//navigeerimiseks  - URL vahetuseks
// 1. npm install react-router-dom
// 2. Browserrouter umbritseb App tagi
// 3. App.js failis <Routes>, mille sees ukshaaval <Route/>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <App />
   </BrowserRouter>
  </React.StrictMode>
);
