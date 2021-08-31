import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recoleccion } from 'src/app/Modelo/Recoleccion';
import { ServicePersonaService } from 'src/app/Services/service-persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  recolecciones: Recoleccion[] = [];
  constructor(private service:ServicePersonaService, private router:Router) { }

  ngOnInit(): void {
    this.service.getRecoleccion().subscribe(
      data=>{this.recolecciones=data;},
      error => {
       alert("Error al cargar las recolecciones");
     }
    );
  }
  Editar(recoleccion:Recoleccion):void{
    localStorage.setItem("id",recoleccion.id.toString());
    this.router.navigate(["editar"]);
  }

  Eliminar(recoleccion:Recoleccion):void{
    this.service.deleteRecoleccion(recoleccion).subscribe(
       data => {this.recolecciones=this.recolecciones.filter(r=>r!==recoleccion);
        alert("Recolección eliminada");
      },
       error => {
        alert("Error al eliminar");
      }
    );
  }



}
