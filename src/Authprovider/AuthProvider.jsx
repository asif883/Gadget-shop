import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase-config/firebase';
import { getAuth, onAuthStateChanged,createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';

export const AuthContext = createContext(null)
 const auth =getAuth(app)

 const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState (null);
    const [loading , setLoading] =useState(true)


    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            
            if(currentUser){
                axios.post('http://localhost:3000/authentication',{email: currentUser?.email})
                .then(data=>{
                    if(data.data){
                        localStorage.setItem('access-token', data?.data?.token)
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
                setLoading(false)
            }
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
        user,
        loading,
        createUser,
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