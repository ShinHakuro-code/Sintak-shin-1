// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHDYV65lobB3EgWJUQ-DDIUBgMtDXEIp0",
  authDomain: "pelatihan-sintak-shin.firebaseapp.com",
  projectId: "pelatihan-sintak-shin",
  storageBucket: "pelatihan-sintak-shin.firebasestorage.app",
  messagingSenderId: "307477965942",
  appId: "1:307477965942:web:ff047d148e8a6635e6c357",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const analytics = getAnalytics(app);

export { db };
