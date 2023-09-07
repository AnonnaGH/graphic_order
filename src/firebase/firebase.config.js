// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKbpNcFzaFbwr589pAPeP5fy78-by-bsk",
  authDomain: "graphic-order.firebaseapp.com",
  projectId: "graphic-order",
  storageBucket: "graphic-order.appspot.com",
  messagingSenderId: "249715472528",
  appId: "1:249715472528:web:ef1d3951d6de61ad3dc015"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app