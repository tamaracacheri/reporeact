import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDYW8-u-oj9TNYdfesLuz8f1wTlU2M8kLo",
  authDomain: "pa-cagada-2e9d4.firebaseapp.com",
  projectId: "pa-cagada-2e9d4",
  storageBucket: "pa-cagada-2e9d4.appspot.com",
  messagingSenderId: "882183241618",
  appId: "1:882183241618:web:39b7413a7e81ab2bbb8b4b"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();