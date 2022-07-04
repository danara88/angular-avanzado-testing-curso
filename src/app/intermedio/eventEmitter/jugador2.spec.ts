import { Jugador2 } from './jugador2';

describe('Jugador 2 emit', () => {
  let jugador: Jugador2;

  beforeEach(() => (jugador = new Jugador2()));

  it('Debe de emitir un evento cuando recibe daño', () => {
    let nuevoHP = 0;

    // Suscribirse al evento cuando se llame
    // Se espera que se resuelva para continuar
    jugador.hbCambia.subscribe((hp) => {
      nuevoHP = hp;
    });

    // Invocar la función para emitir el evento
    jugador.recibeDanio(1000);

    expect(nuevoHP).toBe(0);
  });
});
