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

        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }

    private insertNode(thisNode: BinaryTreeNode, newNode: BinaryTreeNode): void {
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

    search(value: number): boolean {
        return this.searchNode(this.root, value);
    }

    private searchNode(thisNode: BinaryTreeNode, value: number): boolean {
        if (!thisNode) {
            return false;
        }

        if (thisNode.value === value) {
            return true;
        }
        else {
            if (value < thisNode.value) {
                return this.searchNode(thisNode.left, value);
            }
            else {
                return this.searchNode(thisNode.right, value);
            }
        }
    }
}