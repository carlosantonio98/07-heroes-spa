import { types } from '../types/types';

/* Creamos este reducer para manejar los estados
   podemos usar un state para manejar los estados sin problema, pero en esta ocasión como queremos tener mas control de nuestros estados optamos por usar un reducer */
export const authReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                ...state,  // se recomienda poner esto así para mantener el estado anterior y solo reemplazamos lo que realmente nos interesa, porque por ejemplo podriamos tener una configuración en nuestro estado que no nos gustaría perder, entonces así nos evitamos de hacer modificaciones a este reducer el día de mañana
                logged: true,
                name: action.payload
            };
        
        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }
}

// state  = valor por defecto
/*  ejemplo de que podria contener el state
    const initialState = {
        logged: false,
    }
*/
// action = { type, payload }