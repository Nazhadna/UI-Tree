var Node = /** @class */ (function () {
    function Node(key, data) {
        this.key = key;
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
    Node.prototype.getLeftChild = function () {
        return this.leftChild;
    };
    Node.prototype.getRightChild = function () {
        return this.rightChild;
    };
    Node.prototype.setLeftChild = function (ch) {
        this.leftChild = ch;
    };
    Node.prototype.setRightChild = function (ch) {
        this.rightChild = ch;
    };
    Node.prototype.printNode = function () {
        console.log("KEY ", this.key, " DATA: ", this.data);
    };
    Node.prototype.Add = function (key, data) {
        if (this.key < key) {
            if (this.rightChild == null) {
                this.rightChild = new Node(key, data);
            }
            else {
                this.rightChild.Add(key, data);
            }
        }
        else if (this.key > key) {
            if (this.leftChild == null) {
                this.leftChild = new Node(key, data);
            }
            else {
                this.leftChild.Add(key, data);
            }
        }
        else {
            console.log("\n This key already exists");
        }
    };
    Node.prototype.hasNoLeftChild = function () {
        return this.getLeftChild() == null;
    };
    Node.prototype.hasNoRightChild = function () {
        return this.getRightChild() == null;
    };
    Node.prototype.isList = function () {
        return this.getLeftChild() == null && this.getRightChild() == null;
    };
    return Node;
}());
export { Node };
