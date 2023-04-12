import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HeroPage } from '../../../src/heroes/pages/HeroPage';
import { MarvelPage } from '../../../src/heroes/pages/MarvelPage';


const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en <HeroPage />', () => {

    const heroId = 'marvel-spider';

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/hero/' + heroId]}>
                <Routes>
                    <Route path='/hero/:id' element={ <HeroPage /> } />
                </Routes>
            </MemoryRouter>    
        );

        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar un heroe', () => {

        render(
            <MemoryRouter initialEntries={['/hero/' + heroId]}>
                <Routes>
                    <Route path='/hero/:id' element={ <HeroPage /> } />  {/* Para que detecte el params se debe de envolver el elemento en un route */}
                </Routes>
            </MemoryRouter>    
        );
        
        expect( screen.getByText('Spider Man') ).toBeTruthy();
        expect( screen.getByText('Alter ego:') ).toBeTruthy();
        expect( screen.getByText('Publisher:') ).toBeTruthy();
        expect( screen.getByText('First appearance:') ).toBeTruthy();
        expect( screen.getByText('Characters') ).toBeTruthy();

    });
    
    test('Debe de navegar a marvel si el heroe no existe', () => {

        render(
            <MemoryRouter initialEntries={['/hero/' + heroId + '-test']}>
                <Routes>
                    <Route path='/hero/:id' element={ <HeroPage /> } />
                    <Route path='/marvel' element={ <MarvelPage /> } />
                </Routes>
            </MemoryRouter>    
        );

        expect( screen.getByText('MarvelPage') ).toBeTruthy();

    });

    test('Debe de navegar para atrás', () => {

        render(
            <MemoryRouter initialEntries={['/hero/' + heroId]}>
                <Routes>
                    <Route path='/hero/:id' element={ <HeroPage /> } />
                </Routes>
            </MemoryRouter>
        );

        const btn = screen.getByRole('button');
        fireEvent.click(btn);

        expect( mockedUseNavigate ).toHaveBeenCalled();

    });

});