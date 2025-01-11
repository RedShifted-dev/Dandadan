// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMC4E3mNjibPCn8OwPXAhfLq3iEEsQkdQ",
    authDomain: "userdatabase-30d65.firebaseapp.com",
    projectId: "userdatabase-30d65",
    storageBucket: "userdatabase-30d65.firebasestorage.app",
    messagingSenderId: "282457487239",
    appId: "1:282457487239:web:4bc9663d9b46658ce34522"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth(app);


