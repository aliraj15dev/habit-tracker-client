import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)

    const [user, setUser] = useState(null)

    const createUser=(email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgotPassword=(email)=>{
        return sendPasswordResetEmail(auth, email)
    }

    const logoutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const handleGoogleRegister = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const handleProfileUpdate = (name, photo) =>{
        const profile = {
            displayName: name,
            photoURL: photo
        };
        setUser(profile)
        const currentUser = auth.currentUser
        return updateProfile(currentUser, profile).then(() => {
            setUser({ ...auth.currentUser });
        });
  };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setLoading(false)
    })
    return ()=>{unsubscribe()}
    },[])

    const authInfo = {
        user, setUser, handleProfileUpdate, createUser, handleGoogleRegister, signInUser,logoutUser, loading, setLoading,forgotPassword
    }

    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;