import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import './index.css'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
      
const firebaseConfigAuth = {
      apiKey: "AIzaSyAxjLl7b4OKGTw-vFURnKa-_DNaIbPXH70",
      authDomain: "diimonmir-auth.firebaseapp.com",
      projectId: "diimonmir-auth",
      storageBucket: "diimonmir-auth.appspot.com",
      messagingSenderId: "101760716407",
      appId: "1:101760716407:web:476b0f6392b178ffb24072",
      measurementId: "G-JGWGBXE7C3"
};

const firebaseConfig = {
      apiKey: "AIzaSyBoOrseZ30PwwfcRdj8U6c3CtxKxY18lMs",
      authDomain: "todo-c6967.firebaseapp.com",
      projectId: "todo-c6967",
      storageBucket: "todo-c6967.appspot.com",
      messagingSenderId: "737063277768",
      appId: "1:737063277768:web:fa423413d4ee0579bb01fd",
      measurementId: "G-2JSFJZBFTP"
};

export const appAuth = initializeApp(firebaseConfigAuth);
export const app = initializeApp(firebaseConfigAuth);
const analyticsAuth = getAnalytics(appAuth);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <App />
)