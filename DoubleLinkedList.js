class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  
    prepend(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  
    removeFirst() {
      if (!this.head) return;
  
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    }
  
    removeLast() {
      if (!this.tail) return;
  
      if (this.head === this.tail) {
        this.head = this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }
  
    search(data) {
      let current = this.head;
      while (current) {
        if (current.data === data) {
          return current;
        }
        current = current.next;
      }
      return null;
    }
  
    printForward() {
      let current = this.head;
      let result = [];
      while (current) {
        result.push(current.data);
        current = current.next;
      }
      console.log(result.join(' <-> '));
    }
  
    printBackward() {
      let current = this.tail;
      let result = [];
      while (current) {
        result.push(current.data);
        current = current.prev;
      }
      console.log(result.join(' <-> '));
    }
  }
