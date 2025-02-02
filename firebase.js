import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyCl6U7h1z9cp54LxM3_nlQqLx2iV1PaAHI",
    authDomain: "planningapp-1bbcf.firebaseapp.com",
    projectId: "planningapp-1bbcf",
    storageBucket: "planningapp-1bbcf.firebasestorage.app",
    messagingSenderId: "930865022652",
    appId: "1:930865022652:web:460fe9f1a396f15bd3b2b9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
