import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
      
const firebaseConfig = {
      apiKey: "AIzaSyAxjLl7b4OKGTw-vFURnKa-_DNaIbPXH70",
      authDomain: "diimonmir-auth.firebaseapp.com",
      projectId: "diimonmir-auth",
      storageBucket: "diimonmir-auth.appspot.com",
      messagingSenderId: "101760716407",
      appId: "1:101760716407:web:476b0f6392b178ffb24072",
      measurementId: "G-JGWGBXE7C3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <App />
)