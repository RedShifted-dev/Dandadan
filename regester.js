// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
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
const auth = getAuth(app);
//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function(event){
    // get input
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    // email = email.toLowerCase();
    const password = document.getElementById('password').value;

    // Check if fields are empty
    if (user && email && password)
    {
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@iiserb\.ac\.in$/;
        const gmailRegex24 = /^[a-zA-Z._%+-]+24@iiserb\.ac\.in$/;
        if (!gmailRegex.test(email))
            alert("Enter IISER-B Email ID");
        else
        {
            if(!gmailRegex24.test(email))
                alert("Only for 24 Batch")
            else
            {
                event.preventDefault();
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage)
                    // ..
                });
            }
        }
    }
})
