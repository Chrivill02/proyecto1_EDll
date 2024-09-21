import { Accion } from "./accion";
class MaxHeap {
    public heap: Accion[];
    private n: number; // n = cantidad de elementos ingresados

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
    }

    public checkMax(): Accion {
        return this.heap[1];
    }

    public isEmpty(): boolean {
        return this.n == 0;
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
        while (i > 1 && this.heap[father].getPrioridad < this.heap[i].getPrioridad) {
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

    public getMax(): string {
        let max: Accion = this.heap[1];
        //console.log("El this.heap[this.n, es: " + this.heap[this.n])
        this.heap[1] = this.heap[this.n];
        this.heap[this.n] = new Accion("Completada",0);
        this.n--;
        //console.log("Este es el que después es el máximo supuesto " + this.heap[1])
        this.sink(1); // Procedimiento que reestructura el árbol AVL*/
        return "Realizando " + max.show();
    }

    private sink(i: number): void {
        while (2*i <= this.n) {
            let j: number = 2*i; // empezamos asumiendo que el hijo izquierdo es el mayor
            if (j < this.n && this.heap[j].getPrioridad < this.heap[j+1].getPrioridad)
                j++; // cambia a hijo derecho si este es el mayor
            if (this.heap[i].getPrioridad >= this.heap[j].getPrioridad)
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

// main
let myHeap: MaxHeap = new MaxHeap(7);
/*
myHeap.insert(4);
myHeap.insert(5);
myHeap.insert(2);
myHeap.insert(6);
myHeap.insert(1);
myHeap.insert(3);
myHeap.insert(9);
*/

console.log("El número más grande es " + myHeap.getMax());
console.log("El número más grande es " + myHeap.getMax());
console.log("El número más grande es " + myHeap.getMax());