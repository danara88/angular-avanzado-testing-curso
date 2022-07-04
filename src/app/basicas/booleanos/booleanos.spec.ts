import { usuarioIngresado } from './booleanos';

describe('Prueba para los booleanos', () => {
    it('Debe de retornar verdadero', () => {
        const resp = usuarioIngresado();
        // expect( resp ).not.toBeTruthy();
        expect( resp ).toBeTruthy();
    });
});