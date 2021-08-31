import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecoPanel';

  constructor(private router:Router){}
  Listar(){
    this.router.navigate(["listar"]);
  }

  Agregar(){
    this.router.navigate(["agregar"]);
  }

  Logout(){
    localStorage.removeItem('userRol');
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    localStorage.removeItem('id');
    this.router.navigate(["login"]);
  }
}
