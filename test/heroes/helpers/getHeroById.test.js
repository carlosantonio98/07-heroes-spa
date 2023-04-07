import { getHeroesById } from "../../../src/heroes/helpers/gerHeroById";

describe('Pruebas en getHeroById', () => {

    test('Debe de retornar un heroe que coincida con el id "dc-superman"', () => {
        
        const heroe = getHeroesById( 'dc-superman' );

        expect( heroe ).toEqual({
            id: expect.any( String ),
            superhero: expect.any( String ),
            publisher: expect.any( String ),
            alter_ego: expect.any( String ),
            first_appearance: expect.any( String ),      
            characters: expect.any( String ),
        });

    });

});