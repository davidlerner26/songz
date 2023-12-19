import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBQ3NyLGSMSP2_STwoazPkHNAFwokisJ-U',
  authDomain: 'songz-35fbc.firebaseapp.com',
  projectId: 'songz-35fbc',
  storageBucket: 'songz-35fbc.appspot.com',
  messagingSenderId: '193020226797',
  appId: '1:193020226797:web:1730b10b3cf4e2d738f0e4'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()
const usersCollection = db.collection('users')

export { auth, db, usersCollection }
