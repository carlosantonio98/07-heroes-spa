import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';


const mockedUseNavigate = jest.fn();

// Creamos el mock o clon de una libreria de hook
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <SearchPage />', () => {

    // Limpiamos los metodos de jest.fn() despues de cada test
    beforeEach(() => jest.clearAllMocks() );

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );

        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar a batman y el input con el valor del queryString', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>  
        );

        const input = screen.getByRole('textbox');
        expect( input.value ).toBe('batman');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/heroes/dc-batman.jpg');

        // si la alerta se error se muestra falla la prueba
        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('none');

    });

    test('Debe de mostrar un error si no se encuentra el heroe (batman123)', () => {

        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage />
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).not.toBe('none');

    });

    test('Debe de llamar al navigate a la pantalla nueva', () => {

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue }});

        const form = screen.getByLabelText('form');
        fireEvent.submit( form );

        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${ inputValue }`);

    });

});