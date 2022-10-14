import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainDashboard from './components/MainDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainDashboard/>
  </React.StrictMode>
);

