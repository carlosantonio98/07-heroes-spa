import { render, screen } from '@testing-library/react';
import { PrivateRoute } from '../../src/routes/PrivateRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <PrivateRoute />', () => {

    test('Debe de mostrar el children si está autenticado', () => {

        // Para poder evaluar el storage debemos de ir al Storage y sobreescribir el prototype
        // Storage.prototype.setItem es igual al localStorage.setItem() que hacemos comunmente
        Storage.prototype.setItem = jest.fn();  // con esto practicamente estamos anulando la función de setItem. Dado que tanto localStorage como sessionStorage son instancias del objeto Storage, para anular el setItem, debemos de anular el setItem de esta interfaz. En este caso anulamos el setItem sobreescribiendolo con una función de imitacion de jest, esto para poder hacer la prueba de si la función setItem del localstorage se ha llamado.

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Juan Carlos'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider> 
        );

        screen.debug();

        expect( screen.getByText('Ruta privada') ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/search?q=batman');
    });

});