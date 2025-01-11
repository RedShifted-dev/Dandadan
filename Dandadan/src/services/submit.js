import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "../config/regester";


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
        const gmailRegex = /^[a-zA-Z0-9._%+-]+@iiserb\.ac\.in$/;
        const gmailRegex24 = /^[a-zA-Z._%+-]+24@iiserb\.ac\.in$/;
        if (!gmailRegex.test(email))
            alert("Enter IISER-B Email ID");

        else {
            if (!gmailRegex24.test(email))
                alert("Only for 24 Batch");

            else {
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
            }
        }
    }
});
