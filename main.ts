import { Accion } from "./accion";
import { MaxHeap } from "./maxheap";
import { MinHeap } from "./minheap";
let minHeapArray: MinHeap[] = [];
let maxHeapArray: MaxHeap[] = [];
let historial: string[] = []


function comprar(nombre:string, precio:number,cantidad:number){
    let existe:boolean = false;
    for (let i = 0; i < maxHeapArray.length ;i++){
        if(nombre == maxHeapArray[i].getNombre()){
            //console.log("Agregando una accion existente a compra")
            maxHeapArray[i].insert(new Accion(nombre,precio,cantidad))
            existe = true;
        }

    }
    if (existe == false){
        //console.log("Agregando una nueva accion a compra")
        let newMaxHeap:MaxHeap = new MaxHeap (4,nombre)
        newMaxHeap.insert(new Accion(nombre,precio,cantidad))
        maxHeapArray.push(newMaxHeap)
    }
    emparejar(nombre)
}

function vender(nombre:string, precio:number,cantidad:number){
    let existe:boolean = false;
    for (let i = 0; i < minHeapArray.length;i++){
        if(nombre == minHeapArray[i].getNombre()){
            //console.log("Agregando una accion existente a venta")
            minHeapArray[i].insert(new Accion(nombre,precio,cantidad))
            existe = true;
        }

    }
    if (!existe){
        //console.log("Agregando una nueva accion a venta")
        let newMinHeap:MinHeap = new MinHeap (4,nombre)
        newMinHeap.insert(new Accion(nombre,precio,cantidad))
        minHeapArray.push(newMinHeap)
    }
    emparejar(nombre)
}

function emparejar(nombreAccion:string){
    let accionExistente:boolean = false;
    let existeMaxHeap:boolean = false;
    let existeMinHeap:boolean = false;
    let posMax:number = 0;
    let posMin:number = 0;
    for (let i=0; i < maxHeapArray.length ;i++){
        if(nombreAccion == maxHeapArray[i].getNombre()){
            //console.log("Accion de compra encontrada")
            existeMaxHeap = true;
            posMax = i;
        }
    }
    for (let i = 0;i < minHeapArray.length;i++){
        if(nombreAccion == minHeapArray[i].getNombre()){
            //console.log("Accion de venta encontrada")
            existeMinHeap = true;
            posMin = i;
        }
    }
    if (existeMaxHeap == true && existeMinHeap == true){
        accionExistente = true;
    }else if(existeMaxHeap == true){
        //console.log("No hay ninguna venta para ésta accion")
    }else{
        //console.log("No hay ninguna oferta de ésta accion")
    }



    if (accionExistente == true){
        let accionCompra:Accion = maxHeapArray[posMax].checkMax()
        let accionVenta:Accion = minHeapArray[posMin].checkMin()
        if (accionCompra.getPrecio() >= accionVenta.getPrecio()){
            if (accionCompra.getCantidad() > accionVenta.getCantidad()){
                console.log("Transacción realizada")
                minHeapArray[posMin].sellMin()
                historial.push()
                let resultado = accionCompra.getCantidad() - accionVenta.getCantidad()
                //console.log(`Quedan ${resultado} acciones de compra a un precio de ${accionCompra.getPrecio()}`)
                accionCompra.setCantidad(resultado)
                let cadena: string = `Compañia: ${accionVenta.getNombre()}, Acciones intercambiadas: ${accionVenta.getCantidad()} , precio de la accion: ${accionVenta.getPrecio()}`

                historial.push(cadena)

            }else if(accionCompra.getCantidad() == accionVenta.getCantidad()) {
                console.log("Transacción realizada")
                minHeapArray[posMin].sellMin()
                maxHeapArray[posMax].buyMax()
                //console.log("Cantidades de compra y venta iguales")
                let cadena: string = `Compañia: ${accionVenta.getNombre()}, Acciones intercambiadas: ${accionVenta.getCantidad()}, precio de la accion: ${accionVenta.getPrecio()}`

                historial.push(cadena)
            }else{
                
                maxHeapArray[posMax].buyMax()
                console.log("Transacción realizada")
                let resultado = accionVenta.getCantidad() - accionCompra.getCantidad()
                //console.log(`Quedan ${resultado} acciones de venta a un precio de ${accionVenta.getPrecio()}`)
                accionVenta.setCantidad(resultado)
                let cadena: string = `Compañia: ${accionCompra.getNombre()}, Acciones intercambiadas: ${accionCompra.getCantidad()}, precio de la accion: ${accionVenta.getPrecio()}`

                historial.push(cadena)
            }
        
            
        }
    }
    
}
/*
while (maxHeapArray[posMax].isEmpty()){
    emparejar(nombreAccion)
}
while (minHeapArray[posMin].isEmpty()){
    emparejar(nombreAccion)
}
*/
function mostrarHistorial(): void{
    console.log("-----------------------------")
    console.log("----------HISTORIAL-----------")
    console.log("-----------------------------")
    for (const key in historial) {
        console.log(historial[key])
    }
}
console.log("Bienvenido al simulador de acciones")
comprar("McDonalds",100,6)
comprar("McDonalds",200,3)
comprar("McDonalds",50,1)

vender("McDonalds",50,4)
vender("McDonalds",20,1)
vender("McDonalds",30,6)






mostrarHistorial()







