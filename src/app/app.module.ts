import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Recoleccion/listar/listar.component';
import { AgregarComponent } from './Recoleccion/agregar/agregar.component';
import { EditarComponent } from './Recoleccion/editar/editar.component';
import { FormsModule } from '@angular/forms'
import { ServicePersonaService } from '../app/Services/service-persona.service'
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './Recoleccion/login/login.component';
import { HomeComponent } from './Recoleccion/home/home.component'

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServicePersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
