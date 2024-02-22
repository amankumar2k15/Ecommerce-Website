import React from 'react';
import ReactDOM from 'react-dom/client';
import './input.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { SkeletonTheme } from 'react-loading-skeleton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <SkeletonTheme baseColor="#313131" highlightColor="#525252">
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SkeletonTheme>
    </Provider>
  </>
);

