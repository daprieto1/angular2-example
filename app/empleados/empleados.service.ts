import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmpleadosService {

    constructor(private http: Http) { };

    listaDeEmpleados() {
        return this.http.get('http://jsonplaceholder.typicode.com/users')
            .toPromise()
            .then(respuesta => respuesta.json())
            .catch(this.ocurrioUnError);
    }

    informacionEmpleado(id: number) {
        let url = `http://jsonplaceholder.typicode.com/users/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(empleado => empleado.json());
    }

    private ocurrioUnError(error: any) {
        console.log('Ocurrio un error', error);
        return Promise.reject(error.message || error);
    }
}