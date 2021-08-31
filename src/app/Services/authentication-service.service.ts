import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../Modelo/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  user: Usuario = new Usuario; 
  public rol:string = "";
  public username:string = "";
  constructor(private router: Router,private  http:HttpClient) { }
  
  Url='http://localhost:8080/usuarios';

  
  public authenticate(userName: string, password: string) {

    return this.http.get<Usuario>(this.Url+"/"+userName+"/"+password);
    
  }

  public get currentUserRol(): any {    
     
    this.rol = localStorage.getItem('userRol')!;
    this.username = localStorage.getItem('userName')!;
    this.user.rol = this.rol;
    this.user.usuario = this.username;

    return this.user;
  }

  public get isAuthenticated(): boolean {
    return (this.currentUserRol.rol != "guess" && this.currentUserRol.rol !== null && this.currentUserRol.rol !== "");
  }
}
