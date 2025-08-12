// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {createUserWithEmailAndPassword
  , getAuth,
   signInWithEmailAndPassword,
   signOut} from "firebase/auth"


import { addDoc,
   collection,
    getFirestore } from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
  apiKey: "AIzaSyBDtXB2q4MJxdAsBvPfpC-cUCXo2dTZODA",
  authDomain: "netflix-clone-cfac4.firebaseapp.com",
  projectId: "netflix-clone-cfac4",
  storageBucket: "netflix-clone-cfac4.firebasestorage.app",
  messagingSenderId: "558226818009",
  appId: "1:558226818009:web:9b873eaa5dd6ae6dfc0fc8",
  measurementId: "G-78KEXHCYD9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

//setup
const signup = async(name,email,password)=>{
try{
const res = await createUserWithEmailAndPassword(auth,email,password)
const user = res.user;
await addDoc(collection(db,"users"),{
  uid:user.uid,
  name,
  authProvider:"local",
  email
  ,password
})
}
catch(error){
       
  console.log(error)
 
  toast.error("Something went wrong!");
}

}

//login
 const login = async(email,password)=>{
try {
await  signInWithEmailAndPassword(
    auth,email,password)
    toast.success("Logged in successfully!");



} catch (error) {
  console.log(error)
toast.error("Something went wrong!");
}

}

//logout 

const logout =()=>{
  signOut(auth)
}

export{auth,db,signup,login,logout};