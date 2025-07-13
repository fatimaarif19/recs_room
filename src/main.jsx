import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={original}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
