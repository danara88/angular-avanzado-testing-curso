import { IncrementadorComponent } from './incrementador.component';

describe('Incrementador Component Unit', () => {
    let component: IncrementadorComponent;

    beforeEach(() => (component = new IncrementadorComponent()));

    it('Progress should not be more than 100', () => {
        component.progreso = 50;
        component.cambiarValor(5);
        expect(component.progreso).toBe(55);
    });
});
