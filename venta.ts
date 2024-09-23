export class Venta{
    private nombre:string;
    private demanda:number;
    private cantidad:number
    

    constructor(nombre:string, demanda:number, cantidad:number){
        this.nombre = nombre;
        this.demanda = demanda;
        this.cantidad = cantidad;
    }

    public getDemanda(){
        return this.demanda
    }

    public show(){
        return `Nombre de accion: ${this.nombre}, demanda: ${this.demanda}, cantidad: ${this.cantidad},`
    }
}