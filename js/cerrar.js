// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7xd9KIfsqffWxf8-F8ZUeKMcHugspqbc",
    authDomain: "registrovue-66e54.firebaseapp.com",
    projectId: "registrovue-66e54",
    storageBucket: "registrovue-66e54.appspot.com",
    messagingSenderId: "783449294180",
    appId: "1:783449294180:web:e5f8f5dcc9a7ed6472a671"
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