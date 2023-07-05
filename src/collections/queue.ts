class Queue<T> {
    private elements: T[] = [];

    enqueue(...element: T[]): void {
        this.elements.push(...element);
    }

    dequeue(): T {
        return this.elements.shift();
    }

    isEmpty(): boolean {
        return (this.elements.length === 0) ? true : false;
    }

    peek(): T {
        return this.elements[0];
    }

    size(): number {
        return this.elements.length;
    }

    getQueue(): T[] {
        return this.elements;
    }
}

const queue = new Queue<number>();
console.log(`>>> Start: ${queue.getQueue()}`);

queue.enqueue(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(`>>> Enqueue: ${queue.getQueue()}`);

let del: number = queue.dequeue();
console.log(`>>> Dequeue: ${queue.getQueue()}`);
console.log(`>>> Dequeue element: ${del}`);

console.log(`>>> Is Empty: ${queue.isEmpty()}`);

console.log(`>>> Size: ${queue.size()}`);

console.log(`>>> Peek: ${queue.peek()}`);