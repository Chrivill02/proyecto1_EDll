import { Accion } from "./accion";

export class MinHeap {
    private heap: Accion[];
    private n: number; 
    private name:string;

    constructor(size: number,name:string) {
        this.heap = new Array(size + 1);
        this.n = 0;
        this.name = name;
    }

    public checkMin(): Accion {
        return this.heap[1];
    }

    public isEmpty(): boolean {
        return this.n == 0;
        
    }

    public getNombre(){
        return this.name;
    }
    public getQuantity(): number {
        return this.n;
    }

    public insert(value: Accion): void {
        if (this.n == (this.heap.length - 1))
            this.resize(2 * this.heap.length)
        this.n++;
        this.heap[this.n] = value;
        this.swap(this.n);
    }

    private swap(i: number): void {
        let father: number = Math.floor(i / 2);
        while (i > 1 && this.heap[father].getPrecio() > this.heap[i].getPrecio()) {
            let temp: Accion = this.heap[father];
            this.heap[father] = this.heap[i];
            this.heap[i] = temp;
            i = father;
            father = Math.floor(i / 2);
        }
    }


    private resize(newSize: number): void {
        let newHeap: Accion[] = new Array(newSize);
        for (let i = 1; i < this.heap.length; i++)
            newHeap[i] = this.heap[i];
        this.heap = newHeap;
    }

    public sellMin(): void {
        let min: Accion = this.heap[1];
        
        this.heap[1] = this.heap[this.n];
        this.heap[this.n] = new Accion("Completada", 1000,0);
        this.n--;
        
        this.sink(1);
        
        //return `Vendiendo ${max.getCantidad()} accion(es) de ${max.getNombre()} a un precio de: ${max.getPrecio()}`
    
    }
    /*
    public showAll():void{
        console.log("\nMonticulo: ")
        for (let i = 1; i < this.n + 1; i++) {
            console.log(this.heap[i].show());
        }

        console.log("Christian Villegas - 1592623")
    }
    */
    private sink(i: number): void {
        while (2*i <= this.n) {
            let j: number = 2*i; 
            if (j < this.n && this.heap[j].getPrecio() > this.heap[j+1].getPrecio())
                j++; 
            if (this.heap[i].getPrecio() <= this.heap[j].getPrecio())
                break;
            let temp: Accion = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;
            
            i = j;
        }
    }
}

//let minHeap: MinHeap = new MinHeap(7);
/*
minHeap.insert(new Task("Calificar laboratorio 1", 1))
minHeap.insert(new Task("Calificar laboratorio 2", 4))
minHeap.insert(new Task("Reunirse con facultad de ingeniería", 1))
minHeap.insert(new Task("Preparar la siguiente clase", 2))
minHeap.insert(new Task("Definir Laboratorio 3", 3))
minHeap.insert(new Task("Inscribirse a capacitación general", 1))

console.log(minHeap.doNext())
console.log(minHeap.doNext())

minHeap.showAll()
*/