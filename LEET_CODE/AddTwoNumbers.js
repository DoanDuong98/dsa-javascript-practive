/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const dl1 = new DLinkedList();
    for (const l of l1) {
        dl1.addNode(l)
    }
    const dl2 = new DLinkedList();
    for (const l of l2) {
        dl2.addNode(l)
    }
    console.log(dl1.addTwoNums(dl2))
    return dl1.addTwoNums(dl2);
};

class Node {
    constructor(data) {
        this.data = data
        this.next = null;
        this.prev = null
    }
}

class DLinkedList {
    constructor() {
        this.head = null;
        this.tail = null
    }

    addNode(data) {
        const newNode = new Node(data)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return
        }
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    addTwoNums(l2) {
        let current1 = this.head, current2 = l2.head, remember = 0, result = [];
        while (!!current1 || !!current2) {
            let total = (current1?.data || 0) + (current2?.data || 0) + remember;
            if (total >= 10) remember = Math.floor((total)/10)
            result.push(total%10)
            current1 = current1?.next
            current2 = current2?.next
        }
        return result;
    }
}

addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9])


