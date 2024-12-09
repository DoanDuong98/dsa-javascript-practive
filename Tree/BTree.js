function binaryTree(a) {
    let result = [];
    const btree = new BTree();
    for (const num of a) {
        btree.addNode(num)
    }
    // btree.inorderTraversal(undefined, result)
    btree.printTree();
    return result
}

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BTree {
    constructor() {
        this.root = null
    }

    addNode(data) {
        if (this.root == null) {
            this.root = new Node(data);
            this.root.left = null;
            this.root.right = null;
            return;
        }
        let current = this.root;
        const newNode = new Node(data)

        while (true) {
            if (data < current.data) {
              if (!current.left) {
                current.left = newNode;
                return;
              }
              current = current.left;
            } else {
              if (!current.right) {
                current.right = newNode;
                return;
              }
              current = current.right;
            }
          }


    }

    countLeafNode(node = this.root) {
        if (node === null) return 0;
        if (this.ifLeafNode(node)) return 1;
        return this.countLeafNode(node.left) + this.countLeafNode(node.right)
    }

    ifLeafNode(node) {
        return node.left == null && node.right == null
    }

    treeLevel(node = this.root) {
        if (node == null) return -1;
        return 1 + Math.max(this.treeLevel(node.left), this.treeLevel(node.right))
    }

    checkAVL(node = this.root) {
        if (node === null) return true;
        if (Math.abs(this.treeLevel(node.left) - this.treeLevel(node.right)) > 1) return false;
        return this.checkAVL(node.left) && this.checkAVL(node.right)
    }

    deleteNode(node = this.root) {
        if (node != null) {
            if (node.left != null) this.deleteNode(node.left)
            if (node.right != null) this.deleteNode(node.right)

        }
    }

    deleteNum(t = this.node, data) {
        if (t != null){
            if (t.data == x){
                deleteNode(t.left);
                deleteNode(t.right);
                t = null;
            }
            else if (t.data > x) t.left = deleteNumber(t.left, x);
            else t.right = deleteNumber(t.right, x);		
        }
        return t;
    }

    inorderTraversal(node = this.root, result) {
        if (node === null) return;
        this.inorderTraversal(node.left, result);
        result.push(node.data)
        this.inorderTraversal(node.right, result);
    }

    printTree(node = this.root, prefix = "", isLeft = true) {
        if (node === null) return;
    
        // Print the current node with prefix
        console.log(prefix + (isLeft ? "├── " : "└── ") + node.data);
    
        // Update prefix for children
        const newPrefix = prefix + (isLeft ? "│   " : "    ");
        
        // Recursively print the left and right subtrees
        if (node.left || node.right) {
          this.printTree(node.left, newPrefix, true);
          this.printTree(node.right, newPrefix, false);
        }
    }
}

binaryTree([4, 7, 2, 1, 3, 2, 5, 2])

