import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/routes/AppRouter";

describe('Pruebas en <AppRouter />', () => {

    // No me funciono por el tipo de formato del jest.config.cjs
    test('Debe de mostrar el login si no está autenticado', () => {

        const contextValue = { 
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        // solo debemos de evaluarlo con algún elemento que salga en la vista del login, con eso será más que suficiente esta prueba
        expect( screen.getAllByText('login').length ).toBe(2);

    });

    test('Debe de mostrar el componente de Marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                id: 'abc',
                name: 'Carlos Antonio'
            }
        }

        // colocar el login nos ayudara a ver si estamos autenticado, ya que si lo estamos nos mandara a la vista de marvel por defecto, y con los datos de esa vista podremos hacer la prueba
        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getAllByText('Marvel').length ).toBeGreaterThanOrEqual(1);

    });

});