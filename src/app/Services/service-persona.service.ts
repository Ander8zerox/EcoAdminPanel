import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Recoleccion } from '../Modelo/Recoleccion';

@Injectable({
  providedIn: 'root'
})
export class ServicePersonaService {

  constructor(private  http:HttpClient) { }

  Url='http://localhost:8080/recolecciones';

  getRecoleccion(){
    
    let username = localStorage.getItem("userName");
    let password = localStorage.getItem("password");
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Recoleccion[]>(this.Url,{headers});
  }

  createRecoleccion(recoleccion:Recoleccion){
    
    let username = localStorage.getItem("userName");
    let password = localStorage.getItem("password");
    console.log("RECOLECCION " + JSON.stringify(recoleccion))
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.post<Recoleccion>(this.Url,recoleccion,{headers});
  }

  getRecoleccionId(id:number){
    
    let username = localStorage.getItem("userName");
    let password = localStorage.getItem("password");
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<Recoleccion>(this.Url+"/"+id,{headers});
  }

  updateRecoleccion(recoleccion:Recoleccion){
    
    let username = localStorage.getItem("userName");
    let password = localStorage.getItem("password");
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.put<Recoleccion>(this.Url+"/"+recoleccion.id,recoleccion,{headers});
  }

  deleteRecoleccion(recoleccion:Recoleccion){
    
    let username = localStorage.getItem("userName");
    let password = localStorage.getItem("password");
  
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.delete<Recoleccion>(this.Url+"/"+recoleccion.id,{headers})
  }
}
