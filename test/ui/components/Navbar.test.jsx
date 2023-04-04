import { fireEvent, render, screen } from '@testing-library/react';
import { Navbar } from '../../../src/ui/components/Navbar';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter } from 'react-router-dom';

// Mock de librería completa 'react-router-dom'
const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({  // retornamos un objeto
    ...jest.requireActual('react-router-dom'),  // Returna el módulo real en lugar de un mock, y al hacer el spread exparcimos todo lo que trae la librería y sobreescribir solo el useNavigate.
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            id: 'abc',
            name: 'Carlos Antonio'                
        },
        logout: jest.fn()
    }

    /* Usualmente es buena idea llamar el beforeEach cuando usemos un jest.fn(), para que cuando se llamen en cada test estas funciones esten totalmente limpias, como si nunca se hubieran usado */
    beforeEach(() => jest.clearAllMocks() );

    test('Debe de mostrar el nombre del usuario', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>  {/* Sacamos informacion del context porque en nuestro componente lo necesitamos */}
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        expect( screen.getByText('Carlos Antonio') ).toBeTruthy();

    });

    test('Debe de llamar el logout y navigate cuando se haga click en el botón', () => {

        render(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click( logoutBtn );
    
        // Aserciones
        expect( contextValue.logout ).toHaveBeenCalled();
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {'replace': true});

    });

});