import { mensaje } from './string';

describe('Pruebas de strings', () => {
  it('Debe regresar un string', () => {
    const resp = mensaje('Daniel');
    expect(typeof resp).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Juan';
    const resp = mensaje(nombre);
    expect(resp).toContain(nombre);
  });
});
