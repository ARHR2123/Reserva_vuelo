// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc, getDocs, query, updateDoc, where } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
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
const db = getFirestore(app);
// Visualizar Tabla

var tabla = document.getElementById('tabla');

const q = query(collection(db, "reserva_vuelo"));
const unsubscribe = onSnapshot(q, (querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().codigo}`);
        tabla.innerHTML += `
        <tr>
            <td>${doc.data().codigo}</td>
            <td>${doc.data().nombre}</td>
            <td>${doc.data().origen}</td>
            <td>${doc.data().destino}</td>
            <td>${doc.data().fehaSal}</td>
            <td>${doc.data().fechaRe}</td>
            <td>${doc.data().viajero}</td>
            <td>${doc.data().servicio}</td>
            <td>${doc.data().estado}</td>
            <td>${doc.data().precio}</td>
        </tr>
        `
    });
});