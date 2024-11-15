import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase-config/firebase';
import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
 const auth =getAuth(app)

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


    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth ,email, password)
    }

    const logOut = () =>{
        
        return signOut(auth)
     }

    const authInfo ={
        createUser,
        user,
        loading,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;