import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Reducer
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const store = createStore(reducers,  compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
//console.log(store)
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
</React.StrictMode>
);


