import { Routes, RouterModule } from '@angular/router'

import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { EmpleadosComponent } from './empleados/empleados.component';

const appRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'contactenos', component: ContactenosComponent },
    { path: 'empleado/:id', component: EmpleadosComponent },
    { path: '**', component: InicioComponent }
];

export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(appRoutes);