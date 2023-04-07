import { getHeroesByName } from '../../../src/heroes/helpers/getHeroesByName';


describe('Pruebas en getHeroesByName', () => {

    test('Debe de retornar un arreglo de heroes que coincidan con el nombre "green"', () => {

        const heroes = getHeroesByName( 'green' );

        expect( heroes.length ).toBeGreaterThan( 0 );
        expect( heroes[0] ).toEqual({
            id: expect.any( String ),
            superhero: expect.any( String ),
            publisher: expect.any( String ),
            alter_ego: expect.any( String ),
            first_appearance: expect.any( String ),
            characters: expect.any( String )
        });

    });
    
    test('Debe de retornar un arreglo vacío si no encuentra algún heroe con el nombre "goku"', () => {

        const heroes = getHeroesByName( 'goku' );

        expect( heroes.length ).toBe( 0 );

    });

});