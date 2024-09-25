import { Accion } from "./accion";

export class MinHeapTest {
    private heap: number[];
    private n: number; 

    constructor(size: number) {
        this.heap = new Array(size + 1);
        this.n = 0;
        
    }

    public checkMin(): number {
        return this.heap[1];
    }

    public isEmpty(): boolean {
        return this.n == 0;
        
    }

    
    public getQuantity(): number {
        return this.n;
    }

    public insert(value: number): void {
        if (this.n == (this.heap.length - 1))
            this.resize(2 * this.heap.length)
        this.n++;
        this.heap[this.n] = value;
        this.swap(this.n);
    }

    private swap(i: number): void {
        let father: number = Math.floor(i / 2);
        while (i > 1 && this.heap[father] > this.heap[i]) {
            let temp: number = this.heap[father];
            this.heap[father] = this.heap[i];
            this.heap[i] = temp;
            i = father;
            father = Math.floor(i / 2);
        }
    }


    private resize(newSize: number): void {
        let newHeap: number[] = new Array(newSize);
        for (let i = 1; i < this.heap.length; i++)
            newHeap[i] = this.heap[i];
        this.heap = newHeap;
    }

    public doNext(): number {
        let max: number = this.heap[1];
        
        this.heap[1] = this.heap[this.n];
        this.heap[this.n] = 0;
        this.n--;
        
        this.sink(1); 
        return max;

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
            if (j < this.n && this.heap[j] > this.heap[j+1])
                j++; 
            if (this.heap[i] <= this.heap[j])
                break;
            let temp: number = this.heap[i];
            this.heap[i] = this.heap[j];
            this.heap[j] = temp;
            
            i = j;
        }
    }
}

let minHeap: MinHeapTest = new MinHeapTest(7);

minHeap.insert(10)
minHeap.insert(50)
minHeap.insert(600)
minHeap.insert(20)

console.log(minHeap.doNext())
console.log(minHeap.doNext())


