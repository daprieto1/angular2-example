import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { EmpleadosService } from '../empleados/empleados.service'

@Component({
    templateUrl: 'app/nosotros/nosotros.component.html'
})
export class NosotrosComponent implements OnInit {

    empleados: Array<Object>;
    private selectedId: number;

    constructor(
        private empleadosService: EmpleadosService,
        private router: Router) { }

    listaDeEmpleados() {
        this.empleadosService.listaDeEmpleados()
            .then(empleados => this.empleados = empleados);
    }

    ngOnInit() {
        this.listaDeEmpleados();
    }

    clickEnEmpleado(empleado: any) {
        this.router.navigate(['/empleado', empleado.id]);
    }

}