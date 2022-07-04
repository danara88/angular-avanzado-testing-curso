import { obtenerRobots } from './arreglos';

xdescribe('Pruebas de arreglos', () => {
  it('Debe de retornar almenos 3 robots', () => {
    const resp = obtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  // Colocar una x al principio para saltar la prueba
  xit('Debe de existir MegaMan y Ultron', () => {
    const resp = obtenerRobots();
    expect(resp).toContain('MegaMan');
    expect(resp).toContain('Ultron');
  });
});
