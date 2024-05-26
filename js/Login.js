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

// Iniciar Sesión

const login = document.querySelector('#login-form');
login.addEventListener('submit', (e) => {
    e.preventDefault()

    // Capturar Los valores

    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    // Verificar si el email existe

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "** Acceso Correcto **",
                showConfirmButton: false,
                timer: 1500
            });

            window.location.href = "reserva.html";
            //Limpiar el formulario
            login.reset()

        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode == 'auth/invalid-email') {
                Swal.fire({
                    icon: "error",
                    title: '** El correo no es válido **',
                    text: "Ingrese nuevamente! ",
                });
            }
            else if (errorCode == 'auth/weak-password') {
                Swal.fire({
                    icon: "warning",
                    title: '** La contraseña debe tener almenos 6 dígitos **'
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: '** Su cuenta no existe. REGÍSTRESE **',
                    footer: '<a href="#" data-bs-toggle="modal" data-bs-target="#crearusumodal">Desea Registrarse?</a>'
                });
            }
            login.reset();
        });
});

// Permita llenar los campos (Validar)

(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()