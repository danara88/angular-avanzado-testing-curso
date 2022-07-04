import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, Observable, throwError } from 'rxjs';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService(null); // Puedo mandar null por que no hare nada con el http

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init debe de cargar los medicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];

    // Espia al servicio y cuando alguien llame al metodo getMedicos llama y ejecuta esta funcion
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });

    componente.ngOnInit(); // Llamar al ngOnInit para ejecutarlo

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  // Estar seguro que se llame el metodo del servicio (No me importa la respuesta)
  it('Debe llamar al servidor para agregar un medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      return new Observable(); // Observable vacio
    });

    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });

  it('Debe agregar un nuevo medico al arreglo de medicos', () => {
    // Este medico estara incluido en el arreglo de medicos del componete
    const medicoDB = { id: 1, nombre: 'Juan' };

    // Cuando se llame al metodo agregarMedico, se regresara el valor medicoDB
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medicoDB]));

    componente.agregarMedico();

    expect(componente.medicos.indexOf(medicoDB)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar el medico';

    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe de llamar al servidor para borrar un medico', () => {
    // Siempre que aparezca el confirm, lo ponemos como true
    spyOn(window, 'confirm').and.returnValue(true);

    // Espiar al servicio al llamar el metodo borrarMedico
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(
      new Observable()
    );

    componente.borrarMedico('1');

    // Que se haya llamado al espia con ese dato
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('NO debe de llamar al servidor para borrar un medico', () => {
    // Siempre que aparezca el confirm, lo ponemos como true
    spyOn(window, 'confirm').and.returnValue(false);

    // Espiar al servicio al llamar el metodo borrarMedico
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(
      new Observable()
    );

    componente.borrarMedico('1');

    // Que se haya llamado al espia con ese dato
    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
