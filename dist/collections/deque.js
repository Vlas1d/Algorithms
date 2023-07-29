class Deque {
    constructor(input, output) {
        this.deque = [];
        this.input = input;
        this.output = output;
    }
    add(value, side) {
        if (this.input === 'front')
            this.deque.unshift(value);
        else if (this.input === 'back')
            this.deque.push(value);
        else if (side && side === 'front')
            this.deque.unshift(value);
        else
            this.deque.push(value);
    }
    remove(side) {
        if (this.output === 'front')
            return this.deque.shift();
        else if (this.output === 'back')
            return this.deque.pop();
        else if (side && side === 'front')
            return this.deque.shift();
        else
            return this.deque.pop();
    }
    getDeque() {
        return this.deque;
    }
}
const deque = new Deque('back', 'unreg');
deque.add(1);
deque.add(2);
deque.add(3);
deque.add(4);
deque.add(5);
deque.add(6);
deque.add(7);
console.log(deque.getDeque());
deque.remove('front');
deque.remove('front');
console.log(deque.getDeque());
deque.remove();
console.log(deque.getDeque());
//# sourceMappingURL=deque.js.map