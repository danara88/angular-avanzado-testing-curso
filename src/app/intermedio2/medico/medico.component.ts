import { Component, OnInit } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
    selector: 'app-medico',
    templateUrl: './medico.component.html',
})
export class MedicoComponent implements OnInit {
    public medicos: any[] = [];
    constructor(private _medicoService: MedicoService) {}

    ngOnInit(): void {}

    saludarMedico(nombre: string) {
        return `Hola, ${nombre}`;
    }

    obtenerMedicos() {
        this._medicoService.getMedicos().subscribe((resp: any[]) => (this.medicos = resp));
    }
}
