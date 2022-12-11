// Description: Test file for BST sort service
/**
 * BSTNodeIterator class
 * @class BSTNodeIterator
 * @param {BSTNode} node - BST node
 * @returns {BSTNodeIterator} - BST node iterator
 * @example
 * const node = new BSTNode(1);
 * const iterator = new BSTNodeIterator(node);
 * for await (const node of iterator) {
 *    console.log(node.value);
 * }
 */
class BSTNodeIterator {
    constructor(node) {
        this._node = node;
    }

    async *[Symbol.asyncIterator]() {
        if (this._node) {
            yield this._node;
            yield* new BSTNodeIterator(this._node.left);
            yield* new BSTNodeIterator(this._node.right);
        }
    }
}

// create BST node class
/**
 * BSTNode class
 * @class BSTNode
 * @param {number} value - BST node value
 * @returns {BSTNode} - BST node
 * @example
 * const node = new BSTNode(1);
 * console.log(node.value);
 * console.log(node.left);
 * console.log(node.right);
 * for await (const node of node) {
 *   console.log(node.value);
 * }
 */
class BSTNode {
    constructor(value, left, right) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    async *[Symbol.asyncIterator]() {
        yield* new BSTNodeIterator(this);
    }
}

/**
 * BSTSortService class
 * @class BSTSortService
 * @returns {BSTSortService} - BST sort service
 * @example
 * const service = new BSTSortService();
 * const array = [1, 2, 3];
 * const root = service.sort(array);
 * for await (const node of root) {
 *  console.log(node.value);
 * }
 */

class BSTSortService {
    constructor() {
        this._root = null;
    }
    /**
     * sort method
     * @method sort
     * @param {number[]} array - array of numbers
     * 
     *  @returns {BSTNode} - BST root node
     * @example
     * const service = new BSTSortService();
     * const array = [1, 2, 3];
     * const root = service.sort(array);
     * for await (const node of root) {
     * console.log(node.value);
     * }
     *  */
    sort(array) {
        array.forEach(value => {
            this._root = this._insert(this._root, value);
        });
        return this._root;
    }
    // function to find max value in BST

    findMax() {
        let current = this._root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.value;
    }
    _insert(node, value) {
        if (!node) {
            return new BSTNode(value);
        }
        if (value < node.value) {
            node.left = this._insert(node.left, value);
        } else {
            node.right = this._insert(node.right, value);
        }
        return node;
    }
}




// test bstiterator
const a = async () => {
    const node = new BSTNode(1);
    const node2 = new BSTNode(2);
    const node3 = new BSTNode(3);
    node.left = node2;
    node.right = node3;
    const node4 = new BSTNode(4);
    const node5 = new BSTNode(5);
    node2.left = node4;
    node2.right = node5;
    const iterator = new BSTNodeIterator(node);
    for await (const node of iterator) {
        console.log(node.value);
    }
}
a().then().catch(console.error);





