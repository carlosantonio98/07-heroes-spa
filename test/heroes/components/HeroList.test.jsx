import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { HeroList } from '../../../src/heroes/components';


describe('Pruebas en <HeroList />', () => {

    test('Debe de mostrar una lista de heroes', () => {

        render(
            <MemoryRouter>
                <HeroList publisher='DC Comics' />
            </MemoryRouter>
        );
        
        const images = screen.getAllByRole('img');
        expect( images.length ).toBeGreaterThan(1);

    });

});