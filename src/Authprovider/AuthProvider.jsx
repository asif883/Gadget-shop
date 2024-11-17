import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase-config/firebase';
import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';

export const AuthContext = createContext(null)
 const auth =getAuth(app)

 const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null);
    const [loading , setLoading] =useState(true)


    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        };
    },[])

   //  registration  
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth ,email, password)
    }


    // login
    const logIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword( auth , email, password)
        
    }


    // logout
    const logOut = () =>{
        
        return signOut(auth)
     }


    //  googleLogin
     const googleLogin = () =>{
        return signInWithPopup( auth , googleProvider )
     }

    const authInfo ={
        createUser,
        user,
        loading,
        logOut,
        logIn,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;