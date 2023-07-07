const array_list = [];
console.time('>>> Array List >>> create');
for (let i = 0; i < 25000000; i++) {
    array_list.push(Math.floor(Math.random() * 100));
}
console.timeEnd('>>> Array List >>> create');
class ListNode {
    constructor(value) {
        this.number = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    add(number) {
        const node = new ListNode(number);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    insertAtBeginning(number) {
        const node = new ListNode(number);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    insertAtPosition(number, position) {
        const node = new ListNode(number);
        if (position > this.size) {
            this.add(number);
        }
        else if (position <= 1) {
            this.insertAtBeginning(number);
        }
        else {
            let currentPosition = 1;
            let current = this.head;
            while (current && currentPosition < position - 1) {
                current = current.next;
                currentPosition++;
            }
            if (current) {
                node.next = current.next;
                current.next = node;
            }
            this.size++;
        }
    }
    insertAtEnd(number) {
        this.add(number);
    }
    deleteAtBeginning() {
        this.head = this.head.next;
        if (this.size > 0) {
            this.size--;
        }
    }
    deleteAtEnd() {
        if (!this.head) { }
        else if (this.head && !this.head.next) {
            this.head = null;
            this.tail = null;
        }
        else {
            let current = this.head;
            let prew;
            while (current.next) {
                prew = current;
                current = current.next;
            }
            if (prew) {
                prew.next = null;
                this.tail = prew;
            }
        }
        if (this.size > 0) {
            this.size--;
        }
    }
    deleteAtPosition(position) {
        if (position > this.size) {
            this.deleteAtEnd();
        }
        else if (position <= 1) {
            this.deleteAtBeginning();
        }
        else {
            let prewPosition = 1;
            let prew = this.head;
            while (prew && prewPosition < position - 1) {
                prew = prew.next;
                prewPosition++;
            }
            if (prew) {
                prew.next = prew.next.next;
            }
            if (this.size > 0) {
                this.size--;
            }
        }
    }
    getFirstElement() {
        return this.head.number;
    }
    getLastElement() {
        return this.tail.number;
    }
    getElementByPosition(position) {
        if (position > this.size || position < 1) {
            return null;
        }
        else {
            let current = this.head;
            let currentPosition = 1;
            while (current && currentPosition < position) {
                current = current.next;
                currentPosition++;
            }
            return current.number;
        }
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.number);
            current = current.next;
        }
    }
}
const linked_list = new LinkedList();
console.time('>>> Linked List >>> create');
for (let i = 0; i < 25000000; i++) {
    linked_list.add(Math.floor(Math.random() * 100));
}
console.timeEnd('>>> Linked List >>> create');
console.log('-------------------------------------');
console.time('>>> Linked List >>> insert start');
linked_list.insertAtBeginning(333);
console.timeEnd('>>> Linked List >>> insert start');
console.time('>>> Array List >>> insert start');
array_list.unshift(333);
console.timeEnd('>>> Array List >>> insert start');
console.log('-------------------------------------');
console.time('>>> Linked List >>> insert end');
linked_list.insertAtEnd(111);
console.timeEnd('>>> Linked List >>> insert end');
console.time('>>> Array List >>> insert end');
array_list.push(111);
console.timeEnd('>>> Array List >>> insert end');
console.log('-------------------------------------');
console.time('>>> Linked List >>> insert middle');
linked_list.insertAtPosition(222, 500000);
console.timeEnd('>>> Linked List >>> insert middle');
console.time('>>> Array List >>> insert middle');
array_list.splice(499999, 0, 222);
console.timeEnd('>>> Array List >>> insert middle');
console.log('-------------------------------------');
console.time('>>> Linked List >>> get start');
let listFirst = linked_list.getFirstElement();
console.timeEnd('>>> Linked List >>> get start');
console.time('>>> Array List >>> get start');
let arrayFirst = array_list[0];
console.timeEnd('>>> Array List >>> get start');
console.log('-------------------------------------');
console.time('>>> Linked List >>> get end');
let listLast = linked_list.getLastElement();
console.timeEnd('>>> Linked List >>> get end');
console.time('>>> Array List >>> get end');
let arrayLast = array_list[array_list.length - 1];
console.timeEnd('>>> Array List >>> get end');
console.log('-------------------------------------');
console.time('>>> Linked List >>> get middle');
let listMid = linked_list.getElementByPosition(500000);
console.timeEnd('>>> Linked List >>> get middle');
console.time('>>> Array List >>> get middle');
let arrayMid = array_list[499999];
console.timeEnd('>>> Array List >>> get middle');
console.log('-------------------------------------');
console.time('>>> Linked List >>> delete start');
linked_list.deleteAtBeginning();
console.timeEnd('>>> Linked List >>> delete start');
console.time('>>> Array List >>> delete start');
array_list.shift();
console.timeEnd('>>> Array List >>> delete start');
console.log('-------------------------------------');
console.time('>>> Linked List >>> delete end');
linked_list.deleteAtEnd();
console.timeEnd('>>> Linked List >>> delete end');
console.time('>>> Array List >>> delete end');
array_list.pop();
console.timeEnd('>>> Array List >>> delete end');
console.log('-------------------------------------');
console.time('>>> Linked List >>> delete middle');
linked_list.deleteAtPosition(500000);
console.timeEnd('>>> Linked List >>> delete middle');
console.time('>>> Array List >>> delete middle');
array_list.splice(499999, 1);
console.timeEnd('>>> Array List >>> delete middle');
//# sourceMappingURL=task5.js.map