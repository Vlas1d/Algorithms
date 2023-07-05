class Stack {
    constructor() {
        this.elements = [];
    }
    push(...elements) {
        this.elements.push(...elements);
    }
    pop() {
        this.elements.pop();
    }
    isEmpty() {
        return (this.elements.length === 0) ? true : false;
    }
    peek() {
        return this.elements[this.elements.length - 1];
    }
    size() {
        return this.elements.length;
    }
    getStack() {
        return this.elements;
    }
}
const stack = new Stack();
console.log(`>>> Start: ${stack.getStack()}`);
stack.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(`>>> Push: ${stack.getStack()}`);
stack.pop();
console.log(`>>> Pop: ${stack.getStack()}`);
console.log(`>>> Is Empty: ${stack.isEmpty()}`);
console.log(`>>> Size: ${stack.size()}`);
console.log(`>>> Peek: ${stack.peek()}`);
//# sourceMappingURL=stack.js.map