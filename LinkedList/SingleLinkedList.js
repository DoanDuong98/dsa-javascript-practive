class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

// Level 0
class SingleLinkedList {
    constructor() {
        this.head = null
    }

    addNode(data) {
        const newNode = new Node(data);
        let current = this.head;
        if (!current) {
            this.head = newNode;
            return;
        }
        while (current.next) {
            current = current.next
        }
        current.next = newNode;
    }

    addNodeWithIndex(data, index) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode
            return;
        }
        let current = this.head;
        if (index == 0) {
            this.addHead(data)
            return
        }
        if (this.getLengthLinkedList() < index) {
            // Add tail
            return;
        }
        for (let i = 0; i < index - 1; i++) {
            current = current.next
        }
        newNode.next = current.next
        current.next = newNode
    }

    getLengthLinkedList() {
        let current = this.head, length = 0;
        if (current == null) return 0;
        while (current) {
            current = current.next
            length++
        }
        return length;
    }

    addHead(data) {
        let current = this.head;
        if (!current) {
            this.head = newNode
            return;
        }
        const newNode = new Node(data);
        newNode.next = current
        this.head = newNode
    }

    deleteNode(index) {
        let current = this.head, prevNode = null;
        if (index == 0) {
            this.deleteHead();
            return;
        }
        for (let i = 0; i <= index; i++) {
            if (i == index - 1) {
                prevNode = current
                // console.log("Node" + i + ": " + prevNode.data, prevNode.next.data)
            };
            console.log("prevNode::", prevNode)
            console.log("i::", index, i, current)
            current = current.next
        }
        prevNode.next = current
    }

    deleteNodeGreateNumber(num) {
        let current = this.head, index = 0, prevNode = null;
        while (current) {
            prevNode = current;
            current = current.next;
            // console.log(index, prevNode.data, current.data)
            if (current && current.data > num) {
                if (index == 0) {
                    this.deleteHead();
                    return;
                }
                prevNode.next = current.next
            };
            index++;
        }
    }

    updateNode(a , b) {
        let current = this.head;
        while (current) {
            if (current.data == a) current.data = b
            current = current.next;
        }
    }

    deleteHead() {
        let current = this.head;
        if (!current) return;
        this.head = current.next;
    }

    findNode(index) {
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current.data
    }

    show() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + " "
            current = current.next
        }
        return result;
    }
}

function listLinker(arg1,arg2){
    const l = new SingleLinkedList();
    for (const num of arg1) {
        l.addNode(num);
    }
    l.deleteNodeGreateNumber(arg2)
    return l.show()
}

console.log(listLinker([1,1,2,2,3,3], 2))

