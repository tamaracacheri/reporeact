import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANR9Y-UrfsOpgMRJEjyAin51CQFho5ZiM",
  authDomain: "great-buy-shop.firebaseapp.com",
  projectId: "great-buy-shop",
  storageBucket: "great-buy-shop.appspot.com",
  messagingSenderId: "226199256040",
  appId: "1:226199256040:web:8dd0a830314b0fc44d825d"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();