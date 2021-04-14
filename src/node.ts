export class Node<T> {

    key: number;
    data: T;
    private leftChild: Node<T> | null;
    private rightChild: Node<T> | null;

    constructor(key: number, data: T) {
        this.key = key;
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }

    getLeftChild(): Node<T> | null {
        return this.leftChild;
    }

    getRightChild(): Node<T> | null {
        return this.rightChild;
    }

    setLeftChild(ch: Node<T> | null): void {
        this.leftChild = ch;
    }

    setRightChild(ch: Node<T> | null): void {
        this.rightChild = ch;
    }

    printNode(): void {
        console.log("KEY ", this.key, " DATA: ", this.data);
    }

    Add(key: number, data: T): void {
        if (this.key < key) {
            if (this.rightChild == null) {
                this.rightChild = new Node(key, data);
            } else {
                this.rightChild.Add(key, data);
            }
        } else if (this.key > key) {
            if (this.leftChild == null) {
                this.leftChild = new Node(key, data);
            } else {
                this.leftChild.Add(key, data);
            }
        } else {
            console.log("\n This key already exists");
        }
    }

    hasNoLeftChild(): boolean {
        return this.getLeftChild() == null;

    }

    hasNoRightChild(): boolean {
        return this.getRightChild() == null;

    }

    isList(): boolean {
        return this.getLeftChild() == null && this.getRightChild() == null;

    }
}
