import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context';
import { PublicRoute } from '../../src/routes/PublicRoute';

describe('Prueba en <PublicRoute />', () => {

    test('Debe de mostrar el children si no está autenticado', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={ contextValue }>   {/* Establecemos el contexto para que funcione el public route ya que que dentro del public route llamamos el contexto de AuthContext y como este no existe al momento de hacer esta prueba es que marca un error. Por eso creamos el AuthContext y asignamos los valores, para que de esta manera el valor que tiene el authContext lo puedan proveer todos los hijos, en este caso el hijo de este contexto seria el <PublicRoute /> */}
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Ruta pública') ).toBeTruthy();

        // screen.debug();

    });

    test('Debe de navegar si está autenticado', () => {
        const contextValue = {
            logged: true,
            user: {
                id: 'ABC123',
                name: 'Arturo'
            }
        }

        render(
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>  {/* Esta es la ruta en la que nos encontramos, y tenemos que definirla para que funcionen nuestros <navlink/> */}

                    <Routes>

                        <Route path='login' element={  /* Esta estructura es similar al de appRouter */
                            <PublicRoute> {/* Si no esta autenticado pasa ha mostrar el elemento Ruta Pública, si esta autenticado navegamos a la ruta marvel y mostramos el elemento Página marvel */}
                                <h1>Ruta pública</h1>
                            </PublicRoute>
                        } />

                        <Route path='marvel' element={ <h1>Página marvel</h1> } />

                    </Routes>
                    
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Página marvel') ).toBeTruthy();

        // screen.debug();
    });

});