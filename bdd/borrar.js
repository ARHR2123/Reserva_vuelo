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
// Borrar Datos
const reservform = document.getElementById("form-reserv");
const elibtn = document.getElementById("btn-eliminar");
try {
    /*elibtn.addEventListener("click", async () => {
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
    });*/

    function eliminarVuelo(id) {
        if (confirm("¿Está seguro de eliminar esta Reserva de Vuelo?")) {
            elibtn.child(id).remove();
        }
        reservform.reset();
    }
    
} catch (error) {
    Swal.fire({
        icon: "error",
        title: " *** Se ha producido un error al momento de borrar los datos *** "
    });
}
