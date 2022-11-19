import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  appId: process.env.FIREBASE_APP_ID,
}



const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const firestore = getFirestore(app)

// let analytics

if (firebaseConfig?.projectId) {

  // if (app.name && typeof window !== 'undefined') {
  //   analytics = getAnalytics(app)
  // }
}

export {
  auth,
  // analytics,
  firestore,
}