import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

 const auth=getAuth(app);
export  const AuthContext= createContext(null);
const googleProvider= new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null)

      const signInWithGoogle= () =>{
        return signInWithPopup(auth,googleProvider)
      }

      const signInWithGithub= () => {
        return signInWithPopup(auth, githubProvider)
      }
    
    const authInfo= {
        user, signInWithGoogle,signInWithGithub
      }

    return (
        <AuthContext.Provider value={authInfo}  >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;