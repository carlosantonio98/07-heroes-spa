import { getHeroesByPublisher } from "../../../src/heroes/helpers/getHeroesByPublisher";


describe('Pruebas en getHeroesByPublisher', () => {

    test('Debe de retornar un arreglo de heroes que coincidan con el publisher "DC Comics"', () => {

        const heroes = getHeroesByPublisher( 'DC Comics' );

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

});