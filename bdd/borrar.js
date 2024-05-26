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
// Borrar Datos
const reservform = document.getElementById("form-reserv");
const elibtn = document.getElementById("btn-eliminar");
try {
    elibtn.addEventListener("click", async () => {
        const codigobor = document.getElementById("codigo").value;
        const q = query(collection(db, "reserva_vuelo"), where("codigo", "==", codigobor));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (docSnap) => {
            await deleteDoc(doc(db, "reserva_vuelo", docSnap.id));
        });
        Swal.fire({
            position: "center",
            icon: "success",
            title: "** Se ha borrado el Registro ** ",
            showConfirmButton: false,
            timer: 1500
        });
        reservform.reset();
    });
    
} catch (error) {
    Swal.fire({
        icon: "error",
        title: " *** Se ha producido un error al momento de borrar los datos *** "
    });
}
