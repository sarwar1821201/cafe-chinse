import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

 const auth=getAuth(app);
export  const AuthContext= createContext(null);
const googleProvider= new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] =useState(null);
    const [loading, setLoading]= useState(true)
    //    const user= {displayName: 'bdgsh'}

    const createUser= (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn= (email,password) => {
    setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut= () =>{
    setLoading(true)
        return (auth)
    }

      useEffect( ()=>{
         
     const unsubscribe=  onAuthStateChanged( auth, currentUser =>{
         console.log('logged in user', currentUser);
         setUser(currentUser);
         setLoading(false)

        } );
        return () =>{
        return unsubscribe ()
       }
      } , [] )


      const signInWithGoogle= () =>{
        return signInWithPopup(auth,googleProvider)
      }

      const signInWithGithub= () => {
        return signInWithPopup(auth, githubProvider)
      }
    
    const authInfo= {
        user, signInWithGoogle,signInWithGithub,signIn,logOut,createUser,loading
      }

    return (
        <AuthContext.Provider value={authInfo}  >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;