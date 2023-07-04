import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, EmailAuthProvider } from "firebase/auth";


initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth();

    const signInUsingGooglePopup = async () => {
        try {
            setIsLoading(true);
            const googleProvider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, googleProvider);
            setIsLoading(false);
            return result;
        }
        catch {
            setIsLoading(false);
            setError(error);
        }
    }


    const signInUsingGithubPopup = async () => {
        try {
            setIsLoading(true);
            const githubProvider = new GithubAuthProvider();
            const result = await signInWithPopup(auth, githubProvider);
            setIsLoading(false);
            return result;
        }
        catch {
            setIsLoading(false);
            setError(error);
        }
    }




    useEffect(() => {
        setIsLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            try {
                user ? setUser(user) : setUser({});
                setIsLoading(false);
            }
            catch {
                setIsLoading(false);
                setError(error);
            }
        });
        return unsubscribe;
    }, [])


    const logOut = async () => {
        try {
            setIsLoading(true);
            await signOut(auth);
            setUser({});
            setIsLoading(false);
        }
        catch {
            setIsLoading(false);
            setError(error);
        }
    }

    return {
        user,
        signInUsingGooglePopup,
        signInUsingGithubPopup,
        // signInUsingEmail,
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