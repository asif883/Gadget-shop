import React, { createContext } from 'react';
import { app } from '../Firebase-config/firebase';

export const AuthContext = createContext(null)
 const auth =getAuth(app)

const AuthProvider = ({children}) => {

    const createUser = (email, password) =>{
        
    }
    const authInfo ={

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;