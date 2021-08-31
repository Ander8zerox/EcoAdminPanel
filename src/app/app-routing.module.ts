import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Recoleccion/agregar/agregar.component';
import { EditarComponent } from './Recoleccion/editar/editar.component';
import { GuardGuard } from './Recoleccion/guard.guard';
import { HomeComponent } from './Recoleccion/home/home.component';
import { ListarComponent } from './Recoleccion/listar/listar.component';
import { LoginComponent } from './Recoleccion/login/login.component';

const routes: Routes = [
  {path:'', redirectTo: '/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'listar',component:ListarComponent, canActivate: [GuardGuard]},
  {path:'agregar', component:AgregarComponent, canActivate: [GuardGuard]},
  {path:'editar', component:EditarComponent , canActivate: [GuardGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
