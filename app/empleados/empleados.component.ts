import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'

import { EmpleadosService } from './empleados.service'

@Component({
    templateUrl: 'app/empleados/empleados.component.html'
})
export class EmpleadosComponent implements OnInit {

    empleado: Object;

    constructor(private route: ActivatedRoute,
        private empleadosService: EmpleadosService,
        private router: Router) {
    }

    ngOnInit() {
        let id = +this.route.snapshot.params['id'];
        this.empleadosService.informacionEmpleado(id)
            .then(empleado => this.empleado = empleado);
    }

    volver() {
        this.router.navigate(['/nosotros']);
    }
}