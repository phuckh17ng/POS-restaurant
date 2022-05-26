import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import store from './redux/store'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider 
    store={store}
    >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
);

reportWebVitals();
