import { Accion } from "./accion";
import { MaxHeap } from "./maxheap";
import { MinHeap } from "./minheap";
let minHeapArray: MinHeap[] = [];
let maxHeapArray: MaxHeap[] = [];


function comprar(nombre:string, precio:number,cantidad:number){
    for (let i:number; i = 0;i++){
        if(nombre == maxHeapArray[i].getNombre()){
            maxHeapArray[i].insert(new Accion(nombre,precio,cantidad))
        }else{
            let newMaxHeap:MaxHeap = new MaxHeap (4,nombre)
            newMaxHeap.insert(new Accion(nombre,precio,cantidad))
            maxHeapArray.push(newMaxHeap)

        }
    }
}

function vender(nombre:string, precio:number,cantidad:number){
    for (let i:number; i = 0;i++){
        if(nombre == minHeapArray[i].getNombre()){
            minHeapArray[i].insert(new Accion(nombre,precio,cantidad))
        }else{
            let newMinHeap:MinHeap = new MinHeap (4,nombre)
            newMinHeap.insert(new Accion(nombre,precio,cantidad))
            minHeapArray.push(newMinHeap)

        }
    }
}

function emparejar(nombreAccion:string){
    let accionExistente:boolean = false;
    let existeMaxHeap:boolean = false;
    let existeMinHeap:boolean = false;
    let posMax:number = 0;
    let posMin:number = 0;
    for (let i:number; i = 0;i++){
        if(nombreAccion == maxHeapArray[i].getNombre()){
            existeMaxHeap = true;
            posMax = i;
        }
    }
    for (let i:number; i = 0;i++){
        if(nombreAccion == minHeapArray[i].getNombre()){
            existeMinHeap = true;
            posMin = i;
        }
    }
    if (existeMaxHeap == true && existeMinHeap == true){
        accionExistente = true;
    }else if(existeMaxHeap == true){
        console.log("No hay ninguna venta para ésta accion")
    }else{
        console.log("No hay ninguna oferta de ésta accion")
    }

    if (accionExistente == true){
        let accionCompra:Accion = maxHeapArray[posMax].checkMax()
        let accionVenta:Accion = minHeapArray[posMin].checkMin()
        if (accionCompra.getPrecio() >= accionVenta.getPrecio()){
            if (accionCompra.getCantidad() > accionVenta.getCantidad()){
                minHeapArray[posMin].doNext()
                let resultado = accionCompra.getCantidad() - accionVenta.getCantidad()
                accionCompra.setCantidad(resultado)
            }else if(accionCompra.getCantidad() == accionVenta.getCantidad()) {
                minHeapArray[posMin].doNext()
                maxHeapArray[posMax].getMax()
            }else{
                maxHeapArray[posMax].getMax()
                let resultado = accionVenta.getCantidad() - accionCompra.getCantidad()
                accionVenta.setCantidad(resultado)
            }
        }
    }
}

console.log("Bienvenido al simulador de acciones")
comprar("McDonalds",100,6)
comprar("McDonalds",200,3)
comprar("McDonalds",50,1)

vender("McDonalds",50,4)
vender("McDonalds",20,1)
vender("McDonalds",30,6)








