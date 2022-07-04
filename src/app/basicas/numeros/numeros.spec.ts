import { incrementar } from './numeros';

describe('Prueba de numeros', () => {
    it( 'Debe retornar 100 si el numero ingresado es mayor a 100', () => {
        const resp = incrementar(100);
        expect( resp ).toBe(100);
    } );

    it( 'Debe retornar un numero más 1, si no es mayor a 100', () => {
        const resp = incrementar(50);
        expect( resp ).toBe(51);
    } );
});