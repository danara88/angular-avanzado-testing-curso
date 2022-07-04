import { Jugador } from './clase';


describe('Pruebas de clase', () => {

    let jugador = new Jugador();

    // beforeAll()  -> Se dispara antes que todas las pruebas
    // beforeEach() -> Antes de cada una de las pruebas
    // afterAll()   -> Se dispara después de todas
    // afterEach()  -> Se dispara despues de cada una

    beforeAll(() => {
        console.log('beforeAll');
    });

    beforeEach(() => {
        console.log('beforeEach');
        // jugador.hb = 100;
        jugador = new Jugador();
    });

    afterAll(() => {
        console.log('afterAll');
    });

    afterEach(() => {
        console.log('afterEach');
        // jugador.hb = 100;
    });

    it('Debe de retonar 80 de hp si recibe 20 de daño', () => {
        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);
        
        expect(resp).toBe(80);
    });
    
    it('Debe de retonar 50 de hp si recibe 50 de daño', () => {
       //  const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);

        expect(resp).toBe(50);
    });
    
    it('Debe de retonar 0 de hp, si recibe 100 de daño o màs', () => {
       //  const jugador = new Jugador();
        const resp = jugador.recibeDanio(100);

        expect(resp).toBe(0);
    });
});