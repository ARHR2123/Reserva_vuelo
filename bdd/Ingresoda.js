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

let currentEditId = null;

// Ingreso de Datos

//Variable constante

const reservform = document.getElementById("form-reserv");
try {
    reservform.addEventListener("submit", async (e) => {
        e.preventDefault();
    
        const codigovef = reservform.codigo.value;
        const registroguardado = await verificarcod(codigovef);
        if (registroguardado) {
            Swal.fire({
                icon: "error",
                title: " *** El código de reserva que quiere ingresar ya existe, ingrese otro distinto por favor. *** "
            });
            return;
        }
    
        await addDoc(collection(db, "reserva_vuelo"), {
            codigo: reservform.codigo.value,
            nombre: reservform.nombre.value,
            origen: reservform.origen.value,
            destino: reservform.destino.value,
            fehaSal: reservform.fechaSal.value,
            fechaRe: reservform.fechaRe.value,
            viajero: reservform.viajero.value,
            servicio: reservform.servicio.value,
            estado: reservform.estado.value,
            precio: reservform.precio.value
        });
        
        Swal.fire({
            position: "center",
            icon: "success",
            title: "** Su registro a sido ingresado correctamente **",
            showConfirmButton: false,
            timer: 1500
        });
    
        //Limpiar campos
    
        reservform.reset();
    });

    // Validacion de Codigo

    async function verificarcod(codigovef) {
        const q = query(collection(db, "reserva_vuelo"), where("codigo", "==", codigovef));
        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    }
    
} catch (error) {
    Swal.fire({
        icon: "error",
        title: " *** Se ha producido un error al momento de ingresar el registro *** "
    });
    
}