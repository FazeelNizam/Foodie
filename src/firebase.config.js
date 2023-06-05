import { getApp, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyALwKGuhjhAcwyWOyd3EmYmiCgpc08uIMY',
  authDomain: 'restaurantapp-f8c78.firebaseapp.com',
  databaseURL: 'https://restaurantapp-f8c78-default-rtdb.firebaseio.com',
  projectId: 'restaurantapp-f8c78',
  storageBucket: 'restaurantapp-f8c78.appspot.com',
  messagingSenderId: '603091811247',
  appId: '1:603091811247:web:b781ee9c8f4465c3f04d5a',
}

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig)

const firestore = getFirestore(app)
const storage = getStorage(app)

export { app, firestore, storage }
