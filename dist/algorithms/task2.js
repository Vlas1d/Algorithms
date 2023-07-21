class CharNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class CharTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new CharNode(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(thisNode, newNode) {
        if (newNode.value < thisNode.value) {
            if (!thisNode.left) {
                thisNode.left = newNode;
            }
            else {
                this.insertNode(thisNode.left, newNode);
            }
        }
        else {
            if (!thisNode.right) {
                thisNode.right = newNode;
            }
            else {
                this.insertNode(thisNode.right, newNode);
            }
        }
    }
    preOrderTraversal(thisNode) {
        if (!thisNode) {
            return;
        }
        console.log(thisNode.value);
        this.preOrderTraversal(thisNode.left);
        this.preOrderTraversal(thisNode.right);
    }
    breadthFirstTraversal() {
        if (!this.root) {
            return;
        }
        const queue = [this.root];
        while (queue.length > 0) {
            const thisNode = queue.shift();
            console.log(thisNode.value);
            if (thisNode.left) {
                queue.push(thisNode.left);
            }
            if (thisNode.right) {
                queue.push(thisNode.right);
            }
        }
    }
}
const bTree = new CharTree();
const bArr = ['T', 'G', 'B', 'E', 'J', 'F', 'A', 'L', 'V', 'M', 'W', 'R', 'K', 'P', 'C'];
for (let i = 0; i < bArr.length; i++) {
    bTree.insert(bArr[i]);
}
console.log('>>>>>>> 1');
bTree.preOrderTraversal(bTree.root);
console.log('>>>>>>> 2');
bTree.breadthFirstTraversal();
//# sourceMappingURL=task2.js.map