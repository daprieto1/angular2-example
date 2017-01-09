import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { EmpleadosService } from './empleados/empleados.service';

import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { EmpleadosComponent } from './empleados/empleados.component';

@NgModule({
  imports: [BrowserModule, routing, HttpModule, FormsModule],
  declarations: [AppComponent,
    InicioComponent,
    NosotrosComponent,
    ContactenosComponent,
    EmpleadosComponent],
  bootstrap: [AppComponent],
  providers: [appRoutingProviders, EmpleadosService]
})
export class AppModule { }
