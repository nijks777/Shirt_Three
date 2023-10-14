import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import WebGLComponent from './WebGLComponent'; // Adjust the import path as needed

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <WebGLComponent /> {/* Integrate the WebGLComponent here */}
  </React.StrictMode>
);
