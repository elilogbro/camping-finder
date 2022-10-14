import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from './context/CurrentUserContext';

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </BrowserRouter>,
  root
);
