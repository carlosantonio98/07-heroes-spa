import { render, screen } from '@testing-library/react';
import { HeroCard } from '../../../src/heroes/components/HeroCard';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <HeroCard />', () => {

    const hero = {
        id: 'dc-batman',
        superhero:'Batman', 
        publisher:'DC Comics', 
        alter_ego:'Bruce Wayne',
        first_appearance:'Detective Comics #27',
        characters:'Bruce Wayne'
    }

    test('Debe de mostrar una imagen', () => {
        
        render(
            <MemoryRouter>
                <HeroCard { ...hero } />
            </MemoryRouter>
        );
        
        const img = screen.getByRole('img');

        expect( img ).toBeTruthy();
        expect( img.src ).toContain(hero.id + '.jpg');

    });

    test('Debe de mostrar un boton de más información', () => {
        
        render(
            <MemoryRouter>
                <HeroCard { ...hero } />
            </MemoryRouter>
        );

        const btn = screen.getByRole('link');

        expect( btn ).toBeTruthy();
        expect( btn.href ).toContain('/hero/' + hero.id);

    });

});