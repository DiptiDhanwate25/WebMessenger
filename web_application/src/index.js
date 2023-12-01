import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from './store/reducer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider configureStore ={configureStore}>
    <App />
    </Provider>
);


