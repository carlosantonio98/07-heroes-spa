import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';

import { types } from '../types/types';

/* const initialState = {  Borramos esto ya que al momento de ejecutar la función de inicialización el estado de nuestro reducer se inicializa automaticamente
    logged: false
} */

const init = () => {  // inicializamos el estado de nuestro reducer(un reducer es un hook que maneja multiples estado, es como un useState pero con mas control)
    const user = JSON.parse( localStorage.getItem( 'user' ) );

    return {
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({ children }) => {

    const [ authState, dispatch ] = useReducer( authReducer,  { }, init );  // destructuramos para sacar el state y la funciión para hacer el dispatch

    const login = ( name = '' ) => {
        const user = { id: 'ABC', name }

        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem( 'user', JSON.stringify( user ) ); // No solo podemos actualizar el local storage desde aquí, podemos actualizarlo por ejemplo en un useEffect, el chiste es estar al pendiente de esa información para guardarlo, no se debe de hacer nada del localstorage en el reducer porque ese se encarga solo de manejar estados y disparar funciones

        dispatch( action );
    }
    
    const logout = () => {
        const action = {
            type: types.logout,
        }

        localStorage.removeItem( 'user' ); // removemos el usuario

        dispatch( action );
    }


    // No pasamos el dispatch directo a los hijos para no darle acceso total de esto
    return (
        <AuthContext.Provider value={{
            ...authState,  // hay que tener cuidado al hacer esto ya que si dentro del authState hay algo llamado igual al login este se podría sobreescribir
            
            // Methods
            login,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    );
}