class Queue {
    constructor() {
        this.elements = [];
    }
    enqueue(...element) {
        this.elements.push(...element);
    }
    dequeue() {
        return this.elements.shift();
    }
    isEmpty() {
        return (this.elements.length === 0) ? true : false;
    }
    peek() {
        return this.elements[0];
    }
    size() {
        return this.elements.length;
    }
    getQueue() {
        return this.elements;
    }
}
const queue = new Queue();
console.log(`>>> Start: ${queue.getQueue()}`);
queue.enqueue(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(`>>> Enqueue: ${queue.getQueue()}`);
let del = queue.dequeue();
console.log(`>>> Dequeue: ${queue.getQueue()}`);
console.log(`>>> Dequeue element: ${del}`);
console.log(`>>> Is Empty: ${queue.isEmpty()}`);
console.log(`>>> Size: ${queue.size()}`);
console.log(`>>> Peek: ${queue.peek()}`);
//# sourceMappingURL=queue.js.map