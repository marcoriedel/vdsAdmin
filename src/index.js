import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyB4xYV6vSY7fzel8_fReLZ8Av4_OSv-fjw",
    authDomain: "vdsadmin-24103.firebaseapp.com",
    databaseURL: "https://vdsadmin-24103.firebaseio.com",
    projectId: "vdsadmin-24103",
    storageBucket: "",
    messagingSenderId: "646414401646"
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
