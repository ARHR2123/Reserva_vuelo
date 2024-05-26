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
// Crear Usuarios

// Inicio optención de Datos

const crear = document.querySelector('#sesion-form');
crear.addEventListener('submit', (e) => {

    // Hacer que no me cierre la pestaña
    e.preventDefault()

    // Capturar Los valores

    const sesionemail = document.querySelector('#inicio-email').value;
    const sesionpassword = document.querySelector('#inicio-password').value;

    // Mostrar por consola

    // console.log(sesionemail,sesionpassword);

    // Captura del correo y el email y lo pasa a FireBase 
    createUserWithEmailAndPassword(auth, sesionemail, sesionpassword)
        .then((userCredential) => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "** Su Cuenta se a Creado Exitosamente ** ",
                showConfirmButton: false,
                timer: 1500
            });

            //Verificación del correo
            
            sendEmailVerification(auth.currentUser).then(() => {
                Swal.fire({
                    icon: "success",
                    title: "** Se ha enviado un correo de verificación **",
                    text: "Ingresa a tu correo electrónico!",
                });
            });
            //Limpiar el formulario
            crear.reset()

        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode == 'auth/email-already-in-use') {
                Swal.fire({
                    icon: "error",
                    title: '** El CORREO ya existe en esta cuenta **',
                    text: "Registre otro correo que no exista! ",
                });

            }
            else if (errorCode == 'auth/invalid-email') {
                Swal.fire({
                    icon: "error",
                    title: '** El Correo no es válido **',
                    text: "Ingresa un correo existente!",
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
                    icon: "warning",
                    title: "** Existen campos vacíos **"
                });
            }
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
