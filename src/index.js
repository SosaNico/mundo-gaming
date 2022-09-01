import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ItemListContainer title='Proyecto de React'/>
  </React.StrictMode>
);
