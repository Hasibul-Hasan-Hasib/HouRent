import { useEffect, useState } from "react"
import initializeAuthentication from "../firebase/firebase.init"
import { GoogleAuthProvider, FacebookAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const signInUsingGooglePopup = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        if (googleProvider) {
            setIsLoading(false)
        }
        return signInWithPopup(auth, googleProvider)
    }

    const signInUsingFacebookPopup = () => {
        setIsLoading(true)
        const facebookProvider = new FacebookAuthProvider();
        if (facebookProvider) {
            setIsLoading(false)
        }
        return signInWithPopup(auth, facebookProvider)
    }



    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribe;
    }, [auth])

    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }

    return {
        user,
        signInUsingGooglePopup,
        signInUsingFacebookPopup,
        error,
        setError,
        setUser,
        logOut,
        isLoading,
        setIsLoading,
        auth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword
    }
}
export default useFirebase;