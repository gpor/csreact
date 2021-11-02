import "./styles.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGS_GQd1q0gkZrar-TpFbM1BMDICscv-E",
  authDomain: "csreact-3de84.firebaseapp.com",
  projectId: "csreact-3de84",
  storageBucket: "csreact-3de84.appspot.com",
  messagingSenderId: "988483216143",
  appId: "1:988483216143:web:7df2e57d37fb536e4e147a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
