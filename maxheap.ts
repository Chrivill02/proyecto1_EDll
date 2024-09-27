import { Accion } from "./accion";
export class MaxHeap {
    public heap: Accion[];
    private n: number; // n = cantidad de elementos ingresados
    private name:string;

    constructor(size: number, name:string) {
        this.heap = new Array(size + 1);
        this.n = 0;
        this.name = name;
    }

    public checkMax(): Accion {
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
        while (i > 1 && this.heap[father].getPrecio() < this.heap[i].getPrecio()) {
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

    public buyMax(): void {
        let max: Accion = this.heap[1];
        //console.log("El this.heap[this.n, es: " + this.heap[this.n])
        this.heap[1] = this.heap[this.n];
        this.heap[this.n] = new Accion("Completada",-1,0);
        this.n--;
        
        this.sink(1); // Procedimiento que reestructura el árbol AVL*/
        
        //return `Comprando ${max.getCantidad()} accion(es) de ${max.getNombre()} a un precio de: ${max.getPrecio()}`
        
    }

    private sink(i: number): void {
        while (2*i <= this.n) {
            let j: number = 2*i; // empezamos asumiendo que el hijo izquierdo es el mayor
            if (j < this.n && this.heap[j].getPrecio() < this.heap[j+1].getPrecio())
                j++; // cambia a hijo derecho si este es el mayor
            if (this.heap[i].getPrecio() >= this.heap[j].getPrecio())
                break;
            // Hacemos intercambio burbuja entre los nodos para que el mayor quede en la raíz
            let temp: Accion = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;
            // verificamos si procede otro intercambio hacia abajo
            i = j;
        }
    }
}
