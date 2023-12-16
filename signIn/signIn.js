// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyADXImUolL6U91xQMfXV3_i_RLWP5c3PS8",
    authDomain: "mine-wine.firebaseapp.com",
    projectId: "mine-wine",
    storageBucket: "mine-wine.appspot.com",
    messagingSenderId: "687906083079",
    appId: "1:687906083079:web:3fdf20a4dd9bd31c3ff5a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);

const auth = getAuth();
let modal = document.getElementById("myModal");
document.getElementById("login-btn").addEventListener("click", function() {

    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // alert("Sign In Successfully !!");
            // function showPopUp() {
            modal.style.display = "block";
            // }
            // setTimeout(function() {
            //     modal.style.display = "block";
            // }, 10000);
            // modal.style.display = "none";

            function ClosePopUp() {
                modal.style.display = "none";
            }
            setTimeout(ClosePopUp, 2000);

            window.location.href = "../index.html"
                // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});


document.getElementById("googleLogin").addEventListener("click", function() {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;

            // alert("Sign in successfully!!");
            modal.style.display = "block";


            function ClosePopUp() {
                modal.style.display = "none";
            }
            setTimeout(ClosePopUp, 2000);
            window.location.href = "../index.html"
                // IdP data available using getAdditionalUserInfo(result)
                // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
})

document.getElementById("home").addEventListener("click", function() {
    window.location.href = "../index.html"
})