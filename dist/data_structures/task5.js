const array_list = [];
console.time('>>> Array List');
for (let i = 0; i < 1000000; i++) {
    array_list.push(Math.floor(Math.random() * 100));
}
console.timeEnd('>>> Array List');
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
    }
    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.number);
            current = current.next;
        }
        console.log(values);
    }
}
const linked_list = new LinkedList();
console.time('>>> Linked List');
for (let i = 0; i < 1000000; i++) {
    linked_list.add(Math.floor(Math.random() * 100));
}
console.timeEnd('>>> Linked List');
//# sourceMappingURL=task5.js.map