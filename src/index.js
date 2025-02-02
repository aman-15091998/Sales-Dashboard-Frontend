import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MainContext } from './context/mainContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <MainContext>
    <App />
  </MainContext>
);


