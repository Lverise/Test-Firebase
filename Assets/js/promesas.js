import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"
import { db } from "./firebase.js"


export const agregarProducto = async(producto)=>{
    const docRef = await addDoc(collection(db, "productos"), producto);
};

export const obtenerProducto = async()=>{
    const ref = collection(db,"productos");
    const qSnap = await getDocs(ref);

}