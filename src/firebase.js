// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNs6OmchGnXhK3JMetJwksWDSvmrJe2pg',
  authDomain: 'pizza-planet-v3-2e829.firebaseapp.com',
  projectId: 'pizza-planet-v3-2e829',
  storageBucket: 'pizza-planet-v3-2e829.firebasestorage.app',
  messagingSenderId: '328575825842',
  appId: '1:328575825842:web:b8821399e50648b2dd56ab',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
export const dbPizzasRef = collection(db, 'pizzas')
export const dbOrdersRef = collection(db, 'orders')
