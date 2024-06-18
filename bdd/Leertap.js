// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, deleteDoc, doc, getDocs, query, updateDoc, where } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
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
const db = getFirestore(app);
// Visualizar Tabla

var tabla = document.getElementById('tabla');

const q = query(collection(db, "reserva_vuelo"));

try {
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
                <td>
                    <button onclick="editarUsuario('${doc.data().codigo}', '${doc.data().nombre}', '${doc.data().origen}',
                    '${doc.data().destino}', '${doc.data().fehaSal}', '${doc.data().viajero}', '${doc.data().servicio}', '${doc.data().estado}',
                    '${doc.data().precio}')">Editar</button>
                    <button onclick="/bdd/borrar/eliminarVuelo('${doc.data().codigo}')">Eliminar</button>
                
                </td>
            </tr>
            `
        });
    });
    
} catch (error) {
    Swal.fire({
        icon: "error",
        title: " *** Se ha producido un error al momento de visualizar el registro *** "
    });
}
