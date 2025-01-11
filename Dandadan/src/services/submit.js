import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "../config/regester";
import { validEmail } from "../logic/validEmail";


//submit button
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    // get input
    const user = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    // email = email.toLowerCase();
    const password = document.getElementById('password').value;

    // Check if fields are empty
    if (user && email && password) {
        validEmail(event);
    }
});

export function Submit(event) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert("done");
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
}``
