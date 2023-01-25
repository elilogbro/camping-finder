import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import { CurrentUserProvider } from './context/CurrentUserContext';
import { SelectedCampsiteProvider } from './context/SelectedCampsiteContext';
import './index.css'

const root = document.getElementById('root');
render(
  <BrowserRouter>
    <SelectedCampsiteProvider>
      <CurrentUserProvider>
        <App />
      </CurrentUserProvider>
    </SelectedCampsiteProvider>
  </BrowserRouter>,
  root
);
