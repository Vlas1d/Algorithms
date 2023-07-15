class BinaryTreeNode {
    value: number;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    root: BinaryTreeNode | null;

    constructor() {
        this.root = null;
    }

    insert(value: number): void {
        const newNode = new BinaryTreeNode(value);

        if (this.root === null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(thisNode: BinaryTreeNode, newNode: BinaryTreeNode): void {
        if (thisNode.value > newNode.value) {
            if (thisNode.left === null) {
                thisNode.left = newNode;
            }
            else {
                this.insertNode(thisNode.left, newNode);
            }
        }
        else {
            if (thisNode.right === null) {
                thisNode.right = newNode;
            }
            else {
                this.insertNode(thisNode.right, newNode);
            }
        }
    }


}