import { createContext, useContext, useEffect, useState } from "react";
import {auth, db} from '../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { setDoc, doc } from "firebase/firestore";


const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState({})

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    setDoc(doc(db, 'users', email), {
      savedShow: []
    })

  }

  function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logOut() {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubsrcibe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubsrcibe()
    }
  })
    
  return (
    <AuthContext.Provider value={{signUp, signIn, logOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}