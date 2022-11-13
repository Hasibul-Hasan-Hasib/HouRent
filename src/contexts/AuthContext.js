import React, { createContext, useContext } from 'react';
import useFirebase from '../hooks/useFirebase';


const AuthContext = createContext();

const Context = ({ children }) => {

    const authContext = useFirebase();

    return (
        <AuthContext.Provider value={authContext}>
            {children}
        </AuthContext.Provider>
    )
};


export default Context;


export const Auth = () => {
    return useContext(AuthContext);
};
