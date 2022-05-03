// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCCCObjrenxxiYxnDlI8BQjZvfaN1QUhiE',
  authDomain: 'ooad-e6cdf.firebaseapp.com',
  projectId: 'ooad-e6cdf',
  storageBucket: 'ooad-e6cdf.appspot.com',
  messagingSenderId: '488423406260',
  appId: '1:488423406260:web:69a9dd6786a3ebba5175e1',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
