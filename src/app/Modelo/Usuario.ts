export class Usuario{
    
    password:string;
    usuario:string;
    estado:string;
    rol:string;
    id:number;

    constructor(){
        this.password="";
        this.usuario="";
        this.estado="";
        this.rol="";
        this.id=0;
    }

}