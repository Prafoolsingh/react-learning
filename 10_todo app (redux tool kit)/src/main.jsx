import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';
import {store} from './app/store.js';

const root=ReactDOM.createRoot(document.getElementById('root'))

// we can use this Provider wrapper either in App.js or main.js its our choice
root.render(
    <Provider store={store}>
      <App />
    </Provider>,
  )