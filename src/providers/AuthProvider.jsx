import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  //------------------------------- create user --------------------------//

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //-------------------------------  user sign in  --------------------------//

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
}


  //------------------------------- update user profile  --------------------------//




  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
    });
}
  //------------------------------- user log out  --------------------------//

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //------------------------------- onAuthStateChanged  --------------------------//

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("current user", currentUser);
      // get and set token
      if(currentUser){
        axios.post('http://localhost:5000/jwt', {email: currentUser.email})
        .then(data =>{
            console.log(data)
            localStorage.setItem('access-token', data.data.token)
            setLoading(false);
        })
    }
    else{
        localStorage.removeItem('access-token')
    }
    setLoading(false);



  });

   
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
