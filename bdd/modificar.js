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
// Editar Datos

const reservform = document.getElementById("form-reserv");
const editarbtn = document.getElementById("btn-modificar");
try {

    editarbtn.addEventListener("click", async () => {
        const codigomod = document.getElementById("codigo").value;
        const q = query(collection(db, "reserva_vuelo"), where("codigo", "==", codigomod));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (docSnap) => {
            const docRef = doc(db, "reserva_vuelo", docSnap.id);
            await updateDoc(docRef, {
                codigo: document.getElementById("codigo").value,
                nombre: document.getElementById("nombre").value,
                origen: document.getElementById("origen").value,
                destino: document.getElementById("destino").value,
                fechaSal: document.getElementById("fechaSal").value,
                fechaRe: document.getElementById("fechaRe").value,
                viajero: document.getElementById("viajero").value,
                servicio: document.getElementById("servicio").value,
                estado: document.getElementById("estado").value,
                precio: document.getElementById("precio").value
            });
    
            Swal.fire({
                position: "center",
                icon: "success",
                title: "** Se ha Modificado el Registro **",
                showConfirmButton: false,
                timer: 1500
            });
    
            reservform.reset();
        });
    });
    
} catch (error) {
    Swal.fire({
        icon: "error",
        title: " *** Se ha producido un error al momento de modificar el registro *** "
    });
}