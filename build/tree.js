import { Node } from "./node.js";
var Tree = /** @class */ (function () {
    function Tree() {
        this.root = null;
    }
    Tree.prototype.Insert = function (key, data) {
        if (this.root == null) {
            this.root = new Node(key, data);
        }
        else {
            this.root.Add(key, data);
        }
    };
    Tree.prototype.Find = function (key) {
        var currentNode = this.root;
        while (currentNode !== null && currentNode.key !== key) {
            currentNode = (currentNode.key > key) ? currentNode.getLeftChild() : currentNode.getRightChild();
        }
        if (currentNode !== null) {
            currentNode.printNode();
        }
        else {
            console.log("\n Node not found");
        }
    };
    Tree.prototype.Delete = function (key) {
        if (this.root == null) {
            console.log("\n Empty tree");
            return null;
        }
        var currentNode = this.root;
        var previousNode = this.root;
        while (currentNode != null && currentNode.key !== key) {
            if (currentNode.key > key) {
                previousNode = currentNode;
                currentNode = currentNode.getLeftChild();
            }
            else {
                previousNode = currentNode;
                currentNode = currentNode.getRightChild();
            }
        }
        if (currentNode == null) {
            console.log("\n Node not found");
            return null;
        }
        if (currentNode.isList()) {
            if (currentNode === this.root) {
                this.root = null;
            }
            else if (previousNode.getLeftChild() === currentNode) { // nen
                previousNode.setLeftChild(null);
            }
            else {
                previousNode.setRightChild(null);
            }
        }
        else if (currentNode.hasNoRightChild()) {
            if (currentNode === this.root) {
                this.root = currentNode.getLeftChild();
            }
            else if (previousNode.getLeftChild() === currentNode) { // nen
                previousNode.setLeftChild(currentNode.getLeftChild());
            }
            else {
                previousNode.setRightChild(currentNode.getLeftChild());
            }
        }
        else if (currentNode.hasNoLeftChild()) {
            if (currentNode === this.root) {
                this.root = currentNode.getRightChild();
            }
            else if (previousNode.getLeftChild() === currentNode) { // nen
                previousNode.setLeftChild(currentNode.getRightChild());
            }
            else {
                previousNode.setRightChild(currentNode.getRightChild());
            }
        }
        else {
            var replacement = this.FindReplacement(currentNode);
            if (currentNode === this.root) {
                this.root = replacement;
            }
            else if (previousNode.getLeftChild() === currentNode) { // mem
                previousNode.setLeftChild(replacement);
            }
            else {
                previousNode.setRightChild(replacement);
            }
        }
        return null;
    };
    Tree.prototype.FindReplacement = function (node) {
        var parentNode = node;
        var replacementNode = node;
        var currentNode = node.getRightChild();
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
    };
    Tree.prototype.printNode = function (startNode) {
        if (startNode != null) {
            this.printNode(startNode.getLeftChild());
            startNode.printNode();
            this.printNode(startNode.getRightChild());
        }
    };
    Tree.prototype.print = function () {
        if (this.root != null) {
            this.printNode(this.root);
        }
        else {
            console.log("\n Empty tree");
        }
    };
    return Tree;
}());
export { Tree };
