import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//Reducer
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { GoogleOAuthProvider } from '@react-oauth/google';

const store = createStore(reducers,  compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
//console.log(store)
root.render(
  <GoogleOAuthProvider clientId="652251355238-dpp531qb2q4e0c0ek6mkgqubmhki9kmp.apps.googleusercontent.com">
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </GoogleOAuthProvider>

);


