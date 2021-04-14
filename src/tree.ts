import { Node } from "./node.js";

export class Tree<T> {

    root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    Insert(key: number, data: T): void {
        if (this.root == null) {
            this.root = new Node(key, data);
        } else {
            this.root.Add(key, data);
        }
    }

    Find(key: number): void {
        let currentNode: Node<T> | null = this.root;
        while (currentNode !== null && currentNode.key !== key) {
            currentNode = (currentNode.key > key) ? currentNode.getLeftChild() : currentNode.getRightChild();
        }
        if (currentNode !== null) {
            currentNode.printNode();
        } else {
            console.log("\n Node not found");
        }
    }

    Delete(key: number): null {

        if (this.root == null) {
            console.log("\n Empty tree");
            return null;
        }

        let currentNode: Node<T> | null = this.root;
        let previousNode: Node<T>  = this.root;

        while (currentNode != null && currentNode.key !== key) {
            if (currentNode.key > key) {
                previousNode = currentNode;
                currentNode = currentNode.getLeftChild();
            } else {
                previousNode = currentNode;
                currentNode = currentNode.getRightChild();
            }
        }
        if (currentNode == null ) {
            console.log("\n Node not found");
            return null;
        }

        if (currentNode.isList()) {
            if (currentNode === this.root) {
                this.root = null;
            } else if (previousNode.getLeftChild() === currentNode) { // nen
                previousNode.setLeftChild(null);
            } else {
                previousNode.setRightChild(null);
            }
        } else if (currentNode.hasNoRightChild()) {
            if (currentNode === this.root) {
                this.root = currentNode.getLeftChild();
            } else if (previousNode.getLeftChild() === currentNode) { // nen
                previousNode.setLeftChild(currentNode.getLeftChild());
            } else {
                previousNode.setRightChild(currentNode.getLeftChild());
            }
        } else if (currentNode.hasNoLeftChild()) {
            if (currentNode === this.root) {
                this.root = currentNode.getRightChild();
            } else if (previousNode.getLeftChild() === currentNode) { // nen
                previousNode.setLeftChild(currentNode.getRightChild());
            } else {
                previousNode.setRightChild(currentNode.getRightChild());
            }
        } else {
            const replacement: Node<T> = this.FindReplacement(currentNode);
            if (currentNode === this.root) {
                this.root = replacement;
            } else if (previousNode.getLeftChild() === currentNode) { // mem
                previousNode.setLeftChild(replacement);
            } else {
                previousNode.setRightChild(replacement);
            }

        }
        return null;
    }

    private FindReplacement(node: Node<T>): Node<T> {
        let parentNode: Node<T> = node;
        let replacementNode: Node<T> = node;
        let currentNode: Node<T> | null = node.getRightChild();
        while (currentNode != null) {
            parentNode = replacementNode;
            replacementNode = currentNode;
            currentNode = currentNode.getLeftChild();
        }

        if (replacementNode !== node.getRightChild()) {
            parentNode.setLeftChild(replacementNode.getRightChild());
            replacementNode.setRightChild(node.getRightChild());
        }
        replacementNode.setLeftChild(node.getLeftChild());
        return replacementNode;
    }

    printNode(startNode: Node<T> | null): void {
        if (startNode != null) {
            this.printNode(startNode.getLeftChild());
            startNode.printNode();
            this.printNode(startNode.getRightChild());
        }
    }

    print(): void {
        if (this.root != null) {
            this.printNode(this.root);
        } else {
            console.log("\n Empty tree");
        }
    }
}
