import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recoleccion } from 'src/app/Modelo/Recoleccion';
import { ServicePersonaService } from 'src/app/Services/service-persona.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  recoleccion: Recoleccion = new Recoleccion;
  constructor(private router:Router, private service:ServicePersonaService) { }

  ngOnInit(): void {
    this.CargarInformacion();
  }

  CargarInformacion(){
   let id = localStorage.getItem("id")!; 
   this.service.getRecoleccionId(+id)
   .subscribe(data=>{
     this.recoleccion=data;
   },
   error => {
    alert("Error al cargar información");
  })
  }

  Actualizar(recoleccion:Recoleccion){
    this.service.updateRecoleccion(recoleccion)
    .subscribe(data=>{
      this.recoleccion=data;
      alert("Se Actualizo con Exíto");
      this.router.navigate(["listar"]);
    },
    error => {
     alert("Error al editar");
   })
  }

}
