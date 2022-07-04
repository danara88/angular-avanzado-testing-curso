import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [IncrementadorComponent],
            imports: [FormsModule],
        });

        fixture = TestBed.createComponent(IncrementadorComponent); // Elemento compilado por Angular
        component = fixture.componentInstance;
    });

    it('Should dipslay the label in the html', () => {
        component.leyenda = 'Progress';
        fixture.detectChanges(); // Disparar la deteccion de cambios
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        expect(elem.innerHTML).toContain('Progress');
    });

    it('Should display the correct progress value in html element when decrease', () => {
        const elem: HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;
        const btnDecrease = fixture.debugElement.queryAll(By.css('.btn-primary'))[0];
        btnDecrease.triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(elem.innerHTML).toContain('45');
    });

    it('Should display in the input the progress value', () => {
        component.cambiarValor(5);
        fixture.detectChanges(); // El ciclo de deteccion de cambios puede durar un poco mas de lo esperado
        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query(By.css('input')).nativeElement;
            expect(input.value).toBe('55');
        });
    });

    it('Should increase or decrease by 5 when click in the button', () => {
        const btns = fixture.debugElement.queryAll(By.css('.btn-primary'));
        btns[0].triggerEventHandler('click', null); // Simular que hago click en el boton
        expect(component.progreso).toBe(45);

        btns[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });
});
