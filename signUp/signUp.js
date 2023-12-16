// Import the functions you need from the SDKs you need


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

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

// let userArr = JSON.parse(localStorage.getItem("user_details")) || [];

let userArr = JSON.parse(localStorage.getItem("user_details")) || [];
let modal = document.getElementById("myModal");
document.getElementById("signup-btn").addEventListener("click", function() {

    let email = document.getElementById("email-input").value;
    let password = document.getElementById("password-input").value;
    let name = document.getElementById("name-input").value;
    let number = document.getElementById("mobile-input").value;
    // if (number.length != 10) {
    //     alert("Mobile number should be correct");
    // }


    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            user.displayName = name;
            user.phoneNumber = number;
            // console.log(user);
            // alert("Sign up successfully!");

            modal.style.display = "block";


            function ClosePopUp() {
                modal.style.display = "none";
            }
            setTimeout(ClosePopUp, 2000);

            //adding data in local storage
            userArr.push({
                name: user.displayName,
                email: user.email,
            });
            // console.log(userArr);
            localStorage.setItem("user_details", JSON.stringify(userArr));
            window.location.href = "../signIn/signIn.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)

            if (number.length != 10) {
                alert("Please enter valid mobile number !!");
            }


            // console.log(errorMessage);
            if (errorCode == "auth/invalid-email") {
                alert("Please enter valid email !!")
            }
            if (errorCode == "auth/invalid-password") {
                alert("Please enter valid password !!")
            }
            if (errorCode == "auth/missing-email") {
                alert("Please enter valid email !!")
            }
            if (errorCode == "auth/missing-password") {
                alert("Please enter valid password !!")
            }
            // auth/email-already-in-use
            if (errorCode == "auth/email-already-in-use") {
                alert("Email already in use!!")
            }
            if (errorCode == "auth/weak-password") {
                alert("Password must contain atleast 6 characters!!")
            }
        });
})

document.getElementById("googleLogin").addEventListener("click", function() {

    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.


            const user = result.user;
            console.log(user.displayName);
            userArr.push({
                name: user.displayName,
                email: user.email,
            });
            // alert("Sign up successfully!");
            modal.style.display = "block";


            function ClosePopUp() {
                modal.style.display = "none";
            }
            setTimeout(ClosePopUp, 2000);

            window.location.href = "../signIn/signIn.html";

            localStorage.setItem("user_details", JSON.stringify(userArr));
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

            console.log(errorCode);
            alert("Already resgistered email !!");
            // ...
        });
})

document.getElementById("home").addEventListener("click", function() {
    window.location.href = "../index.html"
})