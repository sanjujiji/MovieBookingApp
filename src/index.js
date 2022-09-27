import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from '../src/screens/home/Home';
import HomeDetails from '../src/screens/details/HeaderDetails';
import reportWebVitals from './reportWebVitals';
import Details from'../src/screens/details/Details';
import App from './common/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
