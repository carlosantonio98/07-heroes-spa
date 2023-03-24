import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

const initialState = {
    logged: false
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer,  initialState );  // destructuramos para sacar el state y la funciión para hacer el dispatch

    return (
        <AuthContext.Provider value={{ }}>
            { children }
        </AuthContext.Provider>
    );
}