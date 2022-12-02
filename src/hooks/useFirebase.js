import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


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

    const signInUsingGithubPopup = () => {
        setIsLoading(true)
        const githubProvider = new GithubAuthProvider();
        if (githubProvider) {
            setIsLoading(false)
        }
        return signInWithPopup(auth, githubProvider)
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
        signInUsingGithubPopup,
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