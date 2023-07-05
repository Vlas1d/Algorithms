class Stack<T> {
    private elements: T[] = [];

    push(...elements: T[]): void {
        this.elements.push(...elements);
    }

    pop(): void {
        this.elements.pop();
    }

    isEmpty(): boolean {
        return (this.elements.length === 0) ? true : false;
    }

    peek(): T {
        return this.elements[this.elements.length - 1];
    }

    size(): number {
        return this.elements.length;
    }

    getStack(): T[] {
        return this.elements;
    }
}

const stack = new Stack<number>();
console.log(`>>> Start: ${stack.getStack()}`);

stack.push(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(`>>> Push: ${stack.getStack()}`);

stack.pop();
console.log(`>>> Pop: ${stack.getStack()}`);

console.log(`>>> Is Empty: ${stack.isEmpty()}`);

console.log(`>>> Size: ${stack.size()}`);

console.log(`>>> Peek: ${stack.peek()}`);