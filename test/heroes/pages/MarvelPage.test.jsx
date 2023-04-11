import { render, screen } from "@testing-library/react";
import { MarvelPage } from "../../../src/heroes/pages/MarvelPage";
import { MemoryRouter } from "react-router-dom";


describe('Pruebas en <MarvelPage />', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <MarvelPage />
            </MemoryRouter>
        );

        expect( screen ).toMatchSnapshot();

    });

    test('Debe de mostrar el título  MarvelPage', () => {

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <MarvelPage />
            </MemoryRouter>
        );

        expect( screen.getByText('MarvelPage') ).toBeTruthy();

        screen.debug();

    });

});