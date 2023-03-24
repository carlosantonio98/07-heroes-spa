import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';

import { types } from '../types/types';

const initialState = {
    logged: false
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer,  initialState );  // destructuramos para sacar el state y la funciión para hacer el dispatch

    const login = ( name = '' ) => {
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                name: name
            }
        }

        dispatch( action );
    }


    // No pasamos el dispatch directo a los hijos para no darle acceso total de esto
    return (
        <AuthContext.Provider value={{
            ...authState,  // hay que tener cuidado al hacer esto ya que si dentro del authState hay algo llamado igual al login este se podría sobreescribir
            login: login
        }}>
            { children }
        </AuthContext.Provider>
    );
}