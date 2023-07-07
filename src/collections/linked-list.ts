class ListNode_ {
    number: number;
    next: ListNode_ | null;

    constructor(value: number) {
        this.number = value;
        this.next = null;
    }
}

class LinkedList_ {
    head: ListNode_ | null;
    tail: ListNode_ | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    add(number: number): void {
        const node = new ListNode_(number);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    //------------------INSERT--------------------------------------------

    insertAtBeginning(number: number): void {
        const node = new ListNode_(number);

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

    insertAtPosition(number: number, position: number): void {
        const node = new ListNode_(number);

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

    insertAtEnd(number: number): void {
        this.add(number);
    }

    //------------------DELETE----------------------------------------------

    deleteAtBeginning(): void {
        this.head = this.head.next;
        if (this.size > 0) {
            this.size--;
        }
    }

    deleteAtEnd(): void {
        if (!this.head) { }
        else if (this.head && !this.head.next) {
            this.head = null;
        }
        else {
            let current = this.head;
            let prew: ListNode_ | null;

            while (current.next) {
                prew = current;
                current = current.next;
            }

            if (prew) {
                prew.next = null;
            }
        }
        if (this.size > 0) {
            this.size--;
        }
    }

    deleteAtPosition(position: number): void {
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

    //--------------------GET--------------------------------------------------

    getFirstElement(): number {
        return this.head.number;
    }

    getLastElement(): number {
        return this.tail.number;
    }

    getElementByPosition(position: number): number | null {
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

    //-------------------------------------------------------------------------

    print(): void {
        let current = this.head;

        while (current) {
            console.log(current.number);
            current = current.next;
        }
    }
}

//-------------------TEST------------------------------------------

const linkedList = new LinkedList_();

console.log('Start:');
linkedList.print();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
console.log('Init:');
linkedList.print();

linkedList.insertAtBeginning(10);
linkedList.insertAtEnd(20);
linkedList.insertAtPosition(30, 3);
console.log('Insert:');
linkedList.print();

linkedList.deleteAtBeginning();
linkedList.deleteAtEnd();
console.log('Delete 1:');
linkedList.print();

linkedList.deleteAtPosition(2);
console.log('Delete 2:');
linkedList.print();