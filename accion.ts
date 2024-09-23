import { MaxHeap } from "./maxheap";
import { MinHeap } from "./minheap";

export class Accion{
    private nombre:string;
    private precio:number;
    private cantidad:number;

    

    constructor(nombre:string,precio:number, cantidad:number){
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }


    public getNombre():string{
        return this.nombre;
    }

    public getPrecio(){
        return this.precio;
    }

    public getCantidad(){
        return this.cantidad;
    }

    public setCantidad(cantidad:number){
        this.cantidad = cantidad;
    }


}