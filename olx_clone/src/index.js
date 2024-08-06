import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseProvider from './store/firebasecontext';
import Context from './store/firebasecontext';
ReactDOM.render(

  <FirebaseProvider>
    <Context>
    <App />
    </Context>
  </FirebaseProvider>,
  document.getElementById('root')
);
