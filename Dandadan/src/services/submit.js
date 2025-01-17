import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { auth } from "../config/regester.js";
import { app } from "../config/regester.js";
// import { validEmail } from "../logic/validEmail.js";


// Initialize Firestore
const db = getFirestore(app);


//submit button
const submit = document.getElementById('submit');

submit.addEventListener("click", function (event) {
    event.preventDefault();
    // get input
    const userName = document.getElementById('user').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if fields are empty
    if (userName && email && password) {
        // validEmail(email);
        Submit(userName, email, password);
    }
});

// export
    function Submit(userName, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                userName: userName,
                email: email,
            }).then(() => {
                alert("done");
            });
            
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
}
