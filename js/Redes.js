// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
    getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, sendEmailVerification, OAuthProvider,
    GithubAuthProvider
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJrg9Alv7KvoQ9PJhmbCw1el03gRa1sVM",
    authDomain: "reserva-3caaa.firebaseapp.com",
    projectId: "reserva-3caaa",
    storageBucket: "reserva-3caaa.appspot.com",
    messagingSenderId: "652924412002",
    appId: "1:652924412002:web:df0c04cdf836197113f13b",
    measurementId: "G-NR8K69TGLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



// Iniciar con Google

const google = document.querySelector('#googlelogin');
google.addEventListener('click', e => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            window.location.href = "reserva.html";
            alert("** La vinculación con su cuenta de Google ha sido Correcta **")
        })
        .catch((error) => {
            // ERRORES
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            Swal.fire({
                icon: "error",
                title: "** No se pudo vincular con su cuenta Google **"
            });
        });
});

// Iniciar con Facebook

const facebook = document.querySelector('#facebooklogin');
facebook.addEventListener('click', e => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            window.location.href = "reserva.html";
            alert("** La vinculación con su cuenta de Facebook ha sido Correcta **")
            // The signed-in user info.
            const user = result.user;

            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
            Swal.fire({
                icon: "error",
                title: "** No se pudo vincular con su cuenta de Facebook **"
            });
        });
});

// Iniciar con Microsoft

const Micro = document.querySelector('#correologin');
Micro.addEventListener('click', e => {
    const provider = new OAuthProvider('microsoft.com');
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            window.location.href = "reserva.html";
            alert("** La vinculación con su cuenta de Microsoft ha sido Correcta **")
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "*** No se pudo vincular con su cuenta de Microsoft *** "
            });
        });
});

// Iniciar con GitHub

const github = document.querySelector('#githublogin');
github.addEventListener('click', e => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
            window.location.href = "reserva.html";
            alert("** La vinculación con su cuenta de GitHub ha sido Correcta **")
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "*** No se pudo vincular con su cuenta de GitHub *** "
            });
        });
});