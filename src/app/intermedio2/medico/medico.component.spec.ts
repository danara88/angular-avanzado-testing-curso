// ComponentFixture nos ayuda a tener acceso al html, dom, query, etc
import { HttpClientModule } from '@angular/common/http';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('Medico Component', () => {
    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach(() => {
        // Esto no se hace en las pruebas de integracion
        // component = new MedicoComponent();

        // Las cosas necesarias que necesitamos para probar este componente
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule],
        });

        // Crear un componente ya procesado por el TestBed.
        // Esto es para acceder a todos los metodos del componente
        fixture = TestBed.createComponent(MedicoComponent);

        // Tengo acceso al html o realizar selectores sobre el DOM
        component = fixture.componentInstance;
    });

    it('Should create the component', () => {
        expect(component).toBeTruthy();
    });

    it('Should return the name of the doctor', () => {
        const name = 'Daniel';
        const resp = component.saludarMedico(name);
        expect(resp).toContain(name);
    });
});
