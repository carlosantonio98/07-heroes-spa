import { render, screen } from '@testing-library/react';
import { DcPage } from '../../../src/heroes/pages/DcPage';
import { MemoryRouter } from 'react-router-dom';


describe('Pruebas en <DcPage />', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        render(
            <MemoryRouter initialEntries={['/dc']}>
                <DcPage />
            </MemoryRouter>
        );

        expect( screen ).toMatchSnapshot();

    });

    test('Debe de mostrar el título  DcPage', () => {

        render(
            <MemoryRouter initialEntries={['/dc']}>
                <DcPage />
            </MemoryRouter>
        );

        expect( screen.getByText('DcPage') ).toBeTruthy();

    });

});