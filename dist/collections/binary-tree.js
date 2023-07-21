class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new BinaryTreeNode(value);
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
    search(value) {
        return this.searchNode(this.root, value);
    }
    searchNode(thisNode, value) {
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
//# sourceMappingURL=binary-tree.js.map