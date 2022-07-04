import { FormularioRegister } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Test para el formulario', () => {
  let componente: FormularioRegister;

  beforeEach(() => {
    // Tenemos que mandarle una inyeccion
    componente = new FormularioRegister(new FormBuilder());
  });

  it('Debe de crear una formulario con dos campos: Email y Password', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('El email debe ser obligatorio', () => {
    const control = componente.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });

  it('El email debe ser un correo valido', () => {
    const control = componente.form.get('email');
    control.setValue('daniel@gmail.com');
    expect(control.valid).toBeTruthy();
  });
});
