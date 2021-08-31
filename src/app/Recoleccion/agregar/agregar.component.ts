import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recoleccion } from 'src/app/Modelo/Recoleccion';
import { ServicePersonaService } from 'src/app/Services/service-persona.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  recoleccion: Recoleccion = new Recoleccion;
  constructor(private router:Router, private service:ServicePersonaService) { }

  ngOnInit(): void {
  }

  Guardar(){
    console.log("parametros recoleccion " + this.recoleccion.barrio);
    this.service.createRecoleccion(this.recoleccion)
      .subscribe(data=>{
        alert("Se agregó exitosamente");
        this.router.navigate(["listar"])
      },
      error => {
       alert("Error al crear");
     })
  }

}
