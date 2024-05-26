// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

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

// Cerrar Sesión
const cerrar = document.querySelector('#cerrar');
cerrar.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        Swal.fire({
            title: "¿Está seguro que desea cerrar su cuenta ?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, Cerrar",
            cancelButtonText: "No, Cancelar!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Sesión Cerrada!",
                    icon: "success"
                });
                window.location.href = "index.html";
            }
            else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swal.fire({
                    title: "Cancelado",
                    text: "Puedes seguir reservando los viajes",
                    icon: "error"
                });
            }
        });
    });  
});