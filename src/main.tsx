import ReactDOM from 'react-dom/client'
import App from './App'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
      
const firebaseConfigAuth = {
      apiKey: "AIzaSyAxjLl7b4OKGTw-vFURnKa-_DNaIbPXH70",
      authDomain: "diimonmir-auth.firebaseapp.com",
      projectId: "diimonmir-auth",
      storageBucket: "diimonmir-auth.appspot.com",
      messagingSenderId: "101760716407",
      appId: "1:101760716407:web:476b0f6392b178ffb24072",
      measurementId: "G-JGWGBXE7C3"
};

export const appAuth = initializeApp(firebaseConfigAuth);
export const db = getFirestore(appAuth);
const analyticsAuth = getAnalytics(appAuth);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <App />
)