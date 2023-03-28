import { types } from '../../../src/auth/types/types';


describe('Pruebas en "Types.js"', () => {

    // Agregamos un candado para que este archivo nunca sea modificado y prevenir errores, si necesitamos agregar otro type, tendremos que agregarlo dentro del archivo de types.js y dentro de esta prueba para que no falle al correr el test, esto se hace para prevenir que alguien modifique los key de los types , por ejemplo que modifiquen el logout a logout2 y fallen partes de la aplicación por haber usado el types.logout y no encontrarlo, porque ahora ya se modifico a types.logout2.
    test('Debe de regresar estos types', () => {

        expect( types ).toEqual({
            login:  '[Auth] Login',
            logout: '[Auth] Logout',
        });

    });

});