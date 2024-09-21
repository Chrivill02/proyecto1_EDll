export class Accion{
    private nombre:string;
    private precio:number;
    private prioridad:number;

    constructor(nombre:string, precio:number){
        this.nombre = nombre;
        this.precio = precio;
    }

    public getPrioridad(){
        return this.prioridad
    }

    public show(){
        return `Accion: ${this.nombre}, precio: ${this.precio}, prioridad: ${this.prioridad}`
    }
}