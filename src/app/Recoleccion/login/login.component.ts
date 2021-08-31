import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/Usuario';
import { AuthenticationServiceService } from 'src/app/Services/authentication-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario;

  constructor(private auth:AuthenticationServiceService ) { }

  ngOnInit(): void {
  }

  LogIn(){
    this.auth.authenticate(this.usuario.usuario,this.usuario.password)
    .subscribe(
      data => {
        this.usuario = data;
        localStorage.setItem("userName",this.usuario.usuario);
        localStorage.setItem("userRol",this.usuario.rol);
        localStorage.setItem("password",this.usuario.password);
      }
    )
  }

}
